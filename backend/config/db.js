const mongoose = require('mongoose');
const dbUrl = require('./properties').DB;

module.exports = () => {
    mongoose.connect(dbUrl, {useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true})
    .then(() => console.log(`Mongose connection on`))
    .catch(error => console.log(`Connection has error: ${error}`));

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log(`Mongo is disconnected`);
            process.exit(0);
        });
    });
}