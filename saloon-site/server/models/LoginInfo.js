//var passwordHash = require('password-hash');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoginInfoSchema = new Schema({

  username: { type: String, required: true },
  password: { type: String, required: true }
});

//var hashedPassword = passwordHash.generate('password123');
//
//console.log("******************"); // sha1$3I7HRwy7$cbfdac6008f9cab4083784cbd1874f76618d2a97
//console.log("  password123  "); // sha1$3I7HRwy7$cbfdac6008f9cab4083784cbd1874f76618d2a97
//console.log(hashedPassword); // sha1$3I7HRwy7$cbfdac6008f9cab4083784cbd1874f76618d2a97
//console.log(" ");
//console.log("******************"); // sha1$3I7HRwy7$cbfdac6008f9cab4083784cbd1874f76618d2a97

const LoginInfo=mongoose.model("LoginInfo",LoginInfoSchema);
module.exports = LoginInfo;