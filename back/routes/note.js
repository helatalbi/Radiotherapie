const express = require("express");
const router = express.Router();
const noteControllers = require("../controllers/note");
const authMiddleware = require("./authMiddleware");
const upload = require("../config/multer"); // Ensure this is correctly configured

// Create a new note or update an existing one
router.post(
  "/create",
  authMiddleware,
  upload.array("files"),
  noteControllers.createNote
);

module.exports = router;
