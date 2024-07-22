// config/cloudinary.js
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary using the object configuration method          
cloudinary.config({ 
  cloud_name: 'dbxkvrsyc', 
  api_key: '925631888622694', 
  api_secret: 'Pf5mHKUXXxajdAQnjFexxFNFBF8' 
});

module.exports = cloudinary;
