const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number, // Duration in minutes
        required: true
    },
    price: {
        type: Number, // Price in the relevant currency
        required: true
    }
});

const Service = mongoose.model("Service", ServiceSchema);
module.exports = Service;
