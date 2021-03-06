const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* DATA OBJECT
    noArete: number;
    noAnimal: number;
    edad: string;
    fecha: Date;
*/


const empadreSchema = new Schema({
    noArete: {
        type: Number,
        required: true,
    },
    noAnimal: {
        type: Number,
        required: true
    },
    edad: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: false,
        default: new Date()
    }
}, {
    timestamps: true
});

module.exports = empadreSchema;