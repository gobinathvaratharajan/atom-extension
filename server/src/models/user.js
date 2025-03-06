const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { v4: uuid } = require('uuid');
const validator = require('validator');

const userSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: 'Please provide the user id',
            unique: true,
            default: uuid,
        },
        email: {
            type: String,
            required: 'Please provide the email address',
            lowercase: true,
            trim: true,
            unique: true,
            validator: {
                validator: (email) => validator.isEmail(email),
                required: 'Invalid email address',
            },
        },
        password: {
            type: String,
            required: 'Please provide the password',
        },
        name: {
            type: String,
            required: 'Please provide the username',
        },
        isVerified: {
            type: Boolean,
            required: 'Please provide the account status',
            default: false,
        },
    },
    {
        timestamps: true,
    },
);

userSchema.methods.validatePassword = function validatePassword(password) {
    if (!this.password) return false;
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
