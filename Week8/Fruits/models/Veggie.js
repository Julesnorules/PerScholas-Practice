const mongoose = require('mongoose');
// requires mongoose into our file

const veggieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    // name has a data type of String and is required
    color: { type: String, required: true },
    readyToEat: { type: Boolean } // In here goes your blueprint
});

const Veggie = mongoose.model('Veggie', veggieSchema);

module.exports = Veggie;