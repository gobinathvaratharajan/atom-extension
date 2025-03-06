require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

exports.generateHashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
};

exports.generateJWTtoken = async (user) => {
    const token = jwt.sign(
        {
            userId: user.id,
            email: user.email,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: 60 * 60 * 24 * 7,
        },
    );
    return token;
};

exports.generateCrypto = () => crypto.randomBytes(32).toString('hex');
