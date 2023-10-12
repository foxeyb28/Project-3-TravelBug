const { Schema, model } = require('mongoose');

const tripSchema = new Schema({
    title: {
        type: String,
        required: true,
        // Add validation here if needed
    },
    location: {
        type: String,
    },
    start: {
        type: Date,
    },
    end: {
        type: Date,
    },
    description: {
        type: String,
        required: false,
    },
    guests: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
},
{ timestamps: true }
);

const Trips = model('Trips', tripSchema);

module.exports = Trips;
