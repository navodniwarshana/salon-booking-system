const router = require("express").Router();
let Service = require("../models/Service");

// Add a new service
router.route("/add").post((req, res) => {
    const { name, description, duration, price } = req.body;

    const newService = new Service({
        name,
        description,
        duration,
        price
    });

    newService.save()
        .then(() => {
            res.json("Service Added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err.message });
        });
});

// Get all services
router.route("/").get((req, res) => {
    Service.find()
        .then((services) => {
            res.json(services);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err.message });
        });
});

// Update a service
router.route("/update/:id").put(async (req, res) => {
    const { id } = req.params;
    const { name, description, duration, price } = req.body;

    const updateService = { name, description, duration, price };

    try {
        const updatedService = await Service.findByIdAndUpdate(id, updateService, { new: true });
        res.status(200).send({ status: "Service updated", service: updatedService });
    } catch (err) {
        res.status(500).send({ status: "Error updating data", error: err.message });
    }
});

// Delete a service
router.route("/delete/:id").delete(async (req, res) => {
    const { id } = req.params;

    try {
        await Service.findByIdAndDelete(id);
        res.status(200).send({ status: "Service deleted" });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ status: "Error deleting service", error: err.message });
    }
});

// Get a service by ID
router.route("/get/:id").get(async (req, res) => {
    const { id } = req.params;

    try {
        const service = await Service.findById(id);
        res.status(200).send({ status: "Service fetched", service });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ status: "Error fetching service", error: err.message });
    }
});

module.exports = router;
