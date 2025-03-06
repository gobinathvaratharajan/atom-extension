require('dotenv').config();
const mongoose = require('mongoose');

let connection;

const connect = async (connectionURI) => {
    const uri = connectionURI || process.env.MONGODB_URI;
    try {
        return mongoose.connect(uri);
    } catch (err) {
        console.error(err);
    }
};

const disconnect = () => mongoose.disconnect();

const getConnection = () => connection;

module.exports = {
    connect,
    disconnect,
    getConnection,
};
