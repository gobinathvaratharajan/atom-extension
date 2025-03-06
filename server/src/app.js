require('dotenv/config');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const routes = require('./routes');
const app = express();
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(
    cors({
        credentials: true,
        allowedHeaders: ['Content-type', 'Authorization', 'X-LINK-ME'],
        methods: 'GET, POST, PUT, PATCH, DELETE, HEAD',
    }),
);

// Kill the server if not match
app.use((req, res, next) => {
    if (
        req.method !== 'OPTIONS' &&
        req.headers['origin'] &&
        req.headers['origin'] !== process.env.UI_URL &&
        !req.headers['x-link-me']
    ) {
        return res.status(403).send();
    }
    next();
});

routes(app);

module.exports = app;
