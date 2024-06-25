const router = require("express").Router();
let LoginInfo = require("../models/LoginInfo");


// Add a new login info
router.route("/add").post(async (req, res) => {
    const { username, password } = req.body;
  
    //check already exists
    //const existingUser=await collection.findOne({username: DataTransfer.username});
   // if (existingUser) {
        //res.json("user already exists, pleace choose a different username.");
   // } else {
     
        const newLoginInfo = new LoginInfo({
            username,
            password
        });
  //  }


    try {
        await newLoginInfo.save();
        res.json("Login Info Added");
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
});

// Get all login infos
router.route("/").get(async (req, res) => {
    try {
        const loginInfos = await LoginInfo.find();
        res.json(loginInfos);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
});

// Update a login info
router.route("/update/:id").put(async (req, res) => {
    const { id } = req.params;
    const { username, password } = req.body;

    const updateLoginInfo = { username, password };

    try {
        const updatedLoginInfo = await LoginInfo.findByIdAndUpdate(id, updateLoginInfo, { new: true });
        res.status(200).send({ status: "Login Info updated", loginInfo: updatedLoginInfo });
    } catch (err) {
        res.status(500).send({ status: "Error updating data", error: err.message });
    }
});

// Delete a login info
router.route("/delete/:id").delete(async (req, res) => {
    const { id } = req.params;

    try {
        await LoginInfo.findByIdAndDelete(id);
        res.status(200).send({ status: "Login Info deleted" });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ status: "Error deleting login info", error: err.message });
    }
});

// Get a login info by ID
router.route("/get/:id").get(async (req, res) => {
    const { id } = req.params;

    try {
        const loginInfo = await LoginInfo.findById(id);
        res.status(200).send({ status: "Login Info fetched", loginInfo });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ status: "Error fetching login info", error: err.message });
    }
});

module.exports = router;
