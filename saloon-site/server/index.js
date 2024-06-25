const passwordHash = require('password-hash');

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8070;


app.use(cors());

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Add bodyParser middleware after multer middleware for routes that don't handle file uploads
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB Connection success!");
});

// Import and use routes
const StudentRouter = require("./routes/Students.js");
app.use("/Students", StudentRouter);

const OpenCloseTimesSchemaRouter = require("./routes/OpenCloseTimes.js");
app.use("/OpenCloseTimesSchemas", OpenCloseTimesSchemaRouter);

const UserRouter = require("./routes/Users.js");
app.use("/Users", UserRouter);

const ServiceRouter = require("./routes/Services.js");
app.use("/Services", ServiceRouter);

const AppointmentRouter = require("./routes/Appointments.js");
app.use("/Appointments", AppointmentRouter);

const LoginInfoRouter = require("./routes/LoginInfos.js");
app.use("/LoginInfos",LoginInfoRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port number ${PORT}`);
});
