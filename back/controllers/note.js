const { Note, Fichier } = require("../models");
const cloudinary = require("cloudinary").v2;

exports.createNote = async (req, res) => {
  const { titre, contenu, rappel, type } = req.body;
  const userId = req.user.id; // Assuming `req.user` is populated by your authentication middleware

  // Validate required input fields
  if (!titre || !contenu) {
    return res
      .status(400)
      .json({ message: "Title (titre) and content (contenu) are required." });
  }

  try {
    // Create a new note
    const note = await Note.create({
      titre,
      contenu,
      rappel,
      type,
      userId,
    });

    // Handle file uploads if there are any
    if (req.files && req.files.length > 0) {
      const filePromises = req.files.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: "radiotherapie",
          resource_type: "auto", // Automatically detects the type of the file
        });

        // Create a Fichier record for each file uploaded
        return Fichier.create({
          lien: result.secure_url,
          type: file.mimetype,
          noteId: note.id,
        });
      });

      // Wait for all file uploads and database entries to complete
      await Promise.all(filePromises);
    }

    // Send success response
    res.status(201).json({
      message: "Note created successfully",
      note: note,
    });
  } catch (error) {
    console.error("Error in creating note:", error);
    res
      .status(500)
      .json({ message: "Failed to create note", error: error.message });
  }
};
