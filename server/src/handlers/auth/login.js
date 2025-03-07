const mongoose = require('mongoose');

const { generateJWTtoken } = require('../../utils/crypto');
const { parseUser } = require('../../utils/parse-user');

const User = mongoose.model('User');

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).send({
            error: 'The account user does not exist'
        });
    }
    const isPasswordValid = await user.validatePassword(password);
    if (!user || !isPasswordValid) {
        return res.status(401).send({
            error: 'Invalid email or password'
        });
    }
    const token = generateJWTtoken(user);
    const parsedUser = parseUser(user);

    res.status(200).send({
        token,
        user: parsedUser
    })
}