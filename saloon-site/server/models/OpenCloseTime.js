const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OpenCloseTimesSchema = new Schema({
    day: {
        type: String,
        required: true
    },
    openAt: {
        type: String,
        required: true
    },
    closeAt: {
        type: String,
        required: true
    }
});

const OpenCloseTime = mongoose.model("OpenCloseTime", OpenCloseTimesSchema);
module.exports = OpenCloseTime;
