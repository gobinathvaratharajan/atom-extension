require('dotenv/config');

require('./models/token');
require('./models/user');
const db = require('./utils/database');
const app = require('./app');

const main = async () => {
    await db.connect(process.env.MONGODB_URL);
    app.set('port', process.env.PORT || 8080);
    const port = app.get('port');
    app.listen(port, () => {
        console.log(`🚀 Server started on port ${port}`);
    });
};

main().catch((err) => {
    console.log(err);
});
