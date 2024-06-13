// routes/Appointments.js
const router = require('express').Router();
const Appointment = require('../models/Appointment');

// Add a new appointment
router.route('/add').post(async (req, res) => {
    const { userId, service, date, time } = req.body;

    try {
        const newAppointment = new Appointment({
            userId,
            service,
            date,
            time
        });

        const savedAppointment = await newAppointment.save();
        res.status(201).json(savedAppointment);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to add appointment' });
    }
});

// Get all appointments
router.route('/').get(async (req, res) => {
    try {
        const appointments = await Appointment.find().populate('userId');
        res.status(200).json(appointments);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch appointments' });
    }
});

// Update an appointment
router.route('/update/:id').put(async (req, res) => {
    const { id } = req.params;
    const { userId, service, date, time } = req.body;

    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(id, {
            userId,
            service,
            date,
            time
        }, { new: true });

        if (!updatedAppointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        res.status(200).json(updatedAppointment);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update appointment' });
    }
});

// Delete an appointment
router.route('/delete/:id').delete(async (req, res) => {
    const { id } = req.params;

    try {
        const deletedAppointment = await Appointment.findByIdAndDelete(id);

        if (!deletedAppointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        res.status(200).json({ message: 'Appointment deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete appointment' });
    }
});

// Get an appointment by ID
router.route('/get/:id').get(async (req, res) => {
    const { id } = req.params;

    try {
        const appointment = await Appointment.findById(id).populate('userId');

        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        res.status(200).json(appointment);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch appointment' });
    }
});

module.exports = router;
