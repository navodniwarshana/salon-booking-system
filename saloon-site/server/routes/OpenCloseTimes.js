const router = require("express").Router();
const OpenCloseTime = require("../models/OpenCloseTime");

// Add a new open/close time
router.route("/add").post((req, res) => {
    const { day, openAt, closeAt } = req.body;

    const newOpenCloseTime = new OpenCloseTime({
        day,
        openAt,
        closeAt
    });

    newOpenCloseTime.save()
        .then(() => {
            res.json("Open/Close Time Added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err.message });
        });
});

// Get all open/close times
router.route("/").get((req, res) => {
    OpenCloseTime.find()
        .then((times) => {
            res.json(times);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err.message });
        });
});

// Update an open/close time
router.route("/update/:id").put(async (req, res) => {
    const { id } = req.params;
    const { day, openAt, closeAt } = req.body;

    const updateOpenCloseTime = { day, openAt, closeAt };

    try {
        const updatedTime = await OpenCloseTime.findByIdAndUpdate(id, updateOpenCloseTime, { new: true });
        res.status(200).send({ status: "Open/Close Time updated", time: updatedTime });
    } catch (err) {
        res.status(500).send({ status: "Error updating data", error: err.message });
    }
});

// Delete an open/close time
router.route("/delete/:id").delete(async (req, res) => {
    const { id } = req.params;

    try {
        await OpenCloseTime.findByIdAndDelete(id);
        res.status(200).send({ status: "Open/Close Time deleted" });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ status: "Error deleting time", error: err.message });
    }
});

// Get an open/close time by ID
router.route("/get/:id").get(async (req, res) => {
    const { id } = req.params;

    try {
        const time = await OpenCloseTime.findById(id);
        res.status(200).send({ status: "Open/Close Time fetched", time });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ status: "Error fetching time", error: err.message });
    }
});

module.exports = router;
