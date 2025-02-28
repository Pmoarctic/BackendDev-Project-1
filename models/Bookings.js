const mongoose = require('mongoose');
const Company = require('./Company');
const User = require('./User');

const BookingSchema = new mongoose.Schema({
    bookingDate: {
        type: Date,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    company: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Bookings', BookingSchema);
