const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const connectDB = require("./config/db")
const PORT = 5000;

const dotenv = require('dotenv');
dotenv.config()

app.get("/", (req, res) => res.json({ message: `get request` }))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    },
    filename: function (req, file, cb) {
        cb(null, "abcd" + "-" + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({
    storage
})

connectDB()

app.listen(PORT, () => console.log(`running on ${PORT}`))
