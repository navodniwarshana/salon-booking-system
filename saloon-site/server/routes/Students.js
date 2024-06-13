const router = require("express").Router();
let Student = require("../models/Student");

// Add a new student
router.route("/add").post((req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender
    });

    newStudent.save()
        .then(() => {
            res.json("User Added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err.message });
        });
});

// Get all students
router.route("/").get((req, res) => {
    Student.find()
        .then((students) => {
            res.json(students);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err.message });
        });
});

// Update a student
router.route("/update/:id").put(async (req, res) => {
    const { id } = req.params;
    const { name, age, gender } = req.body;

    const updateUser = { name, age, gender };

    try {
        const updatedUser = await Student.findByIdAndUpdate(id, updateUser, { new: true });
        res.status(200).send({ status: "User updated", user: updatedUser });
    } catch (err) {
        res.status(500).send({ status: "Error updating data", error: err.message });
    }
});

// Delete a student
router.route("/delete/:id").delete(async (req, res) => {
    const { id } = req.params;

    try {
        await Student.findByIdAndDelete(id);
        res.status(200).send({ status: "User deleted" });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ status: "Error deleting user", error: err.message });
    }
});

// Get a student by ID
router.route("/get/:id").get(async (req, res) => {
    const { id } = req.params;

    try {
        const user = await Student.findById(id);
        res.status(200).send({ status: "User fetched", user });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ status: "Error fetching user", error: err.message });
    }
});

module.exports = router;
