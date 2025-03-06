const mongoose = require('mongoose');

const {
    generateHashPassword,
    generateJWTtoken,
    generateCrypto,
} = require('../../utils/crypto');
const { parseUser } = require('../../utils/parse-user');

const User = mongoose.model('User');
const Token = mongoose.model('Token');

exports.register = async (req, res) => {
    const { email, password, name } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).send({
            error: 'The account with provided user already exists',
        });
    }

    const hashPassword = await generateHashPassword(password);
    const user = await User.create({
        name,
        email,
        password: hashPassword,
    });

    await Token.create({
        user: user._id,
        token: generateCrypto(),
    });

    const token = generateJWTtoken(user);
    const parsedUser = parseUser(user);

    res.status(201).send({
        token,
        user: parsedUser,
    });
};
