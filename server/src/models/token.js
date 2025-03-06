const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: 'please provide your token',
    },
    user: {
        type: mongoose.Schema.ObjectId,
        required: 'please provide the user',
        ref: 'User',
    },
    createdAt: {
        type: Date,
        required: 'please provide the data',
        default: Date.now,
    },
});

tokenSchema.index(
    {
        createdAt: 1,
    },
    {
        expireAfterSeconds: 43200, // 12 hours
    },
);

module.exports = mongoose.model('Token', tokenSchema);
