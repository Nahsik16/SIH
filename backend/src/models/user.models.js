const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    role: {
        type: String,
        enum: ['alumini', 'admin'],
        required: true
    },
    branch: {
        type: String,
        enum: ['CS', 'IT', 'EXTC', 'AI&DS', "Chemical"],
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    currentcompany: {
        type: String
    },

}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);