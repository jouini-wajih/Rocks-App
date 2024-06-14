const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 3000;

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Destination folder where files will be saved
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name
  },
});

// Multer upload instance for handling multiple files
const upload = multer({ storage: storage }).array("files"); // 'files' should match formData.append('files', selectedFiles[i]) in the frontend

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Serve static files from the 'client' folder
app.use(express.static(path.join(__dirname, "client")));

// Route for file upload
app.post("/api/upload", (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading
      console.error("Multer error:", err);
      return res.status(500).json({ message: "File upload error", error: err });
    } else if (err) {
      // An unknown error occurred when uploading
      console.error("Unknown error:", err);
      return res.status(500).json({ message: "Unknown error", error: err });
    }

    // Everything went fine, files are uploaded successfully
    console.log("Files uploaded successfully.");
    return res.status(200).json({ message: "Files uploaded successfully" });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
