const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const flightSchema = new Schema({ 
    departs: {
        type: Date,
        default: () => {
            let currentDate = new Date();
            let year = currentDate.getFullYear();
            let month = currentDate.getMonth();
            let day = currentDate.getDay();
            return new Date (year +1, month, day)
        }
    }
});

const Flight = model('Flight', flightSchema);

module.exports = Flight;

