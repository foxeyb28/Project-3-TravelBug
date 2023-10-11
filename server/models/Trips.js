const { Schema } = require('mongoose');

const tripSchema = new Schema({
    title: {
        type: String,
        required: true,
        // maybe validate length requirement?
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



const Trip = model ('Trip', tripSchema);

module.exports = Trips;