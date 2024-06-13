const router = require("express").Router();
const Appointment = require("../models/Appointment");

// Add a new appointment
router.route("/add").post(async (req, res) => {
    const { userId, service, date, time } = req.body;

    const newAppointment = new Appointment({
        userId,
        service,
        date,
        time
    });

    try {
        const savedAppointment = await newAppointment.save();
        res.status(201).json("Appointment Added");
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
});

// Get all appointments
router.route("/").get(async (req, res) => {
    try {
        const appointments = await Appointment.find().populate('userId');
        res.status(200).json(appointments);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
});

// Update an appointment
router.route("/update/:id").put(async (req, res) => {
    const { id } = req.params;
    const { userId, service, date, time } = req.body;

    const updateAppointment = { userId, service, date, time };

    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(id, updateAppointment, { new: true });
        if (!updatedAppointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }
        res.status(200).send({ status: "Appointment updated", appointment: updatedAppointment });
    } catch (err) {
        res.status(500).send({ status: "Error updating appointment", error: err.message });
    }
});

// Delete an appointment
router.route("/delete/:id").delete(async (req, res) => {
    const { id } = req.params;

    try {
        const deletedAppointment = await Appointment.findByIdAndDelete(id);
        if (!deletedAppointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }
        res.status(200).send({ status: "Appointment deleted" });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ status: "Error deleting appointment", error: err.message });
    }
});

// Get an appointment by ID
router.route("/get/:id").get(async (req, res) => {
    const { id } = req.params;

    try {
        const appointment = await Appointment.findById(id).populate('userId');
        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }
        res.status(200).send({ status: "Appointment fetched", appointment });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ status: "Error fetching appointment", error: err.message });
    }
});

module.exports = router;
