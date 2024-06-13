const router = require("express").Router();
const multer = require("multer");
const path = require("path");
let User = require("../models/User");

// Set up multer for storing uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Append extension
    }
});

const upload = multer({ storage: storage });

// Add a new user with profile picture
router.route("/add").post(upload.single('profilePicture'), (req, res) => {
    const { username, password, contactNumber, address, age, gender } = req.body;
    const profilePicture = req.file.path; // Get the file path

    const newUser = new User({
        username,
        password,
        contactNumber,
        address,
        age,
        gender,
        profilePicture
    });

    newUser.save()
        .then(() => {
            res.json("User Added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err.message });
        });
});

// Other routes remain unchanged

module.exports = router;
