const { notFound } = require('../handlers/not-found');

const baseRoute = require('./base');
const authRoute = require('./auth');

module.exports = (app) => {
    app.use('/', baseRoute);
    app.use('/auth', authRoute);

    // 404 Fallback route
    app.use(notFound);
};
