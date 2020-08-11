const mongoose = require('mongoose');
const empadreSchema = require('./empadre.model');

empadreSchema.statics = {
    create: function(data, cb) {
        const cargada = new this(data);
        cargada.save(cb);
    },
    getAll: function(query, cb) {
        empadreModel.find({},{},query, cb);
    },
    get: function(id, cb) {
        this.findOne({"_id": id }, cb);
    },
}

const empadreModel = mongoose.model('EmpadreHistorial', empadreSchema);
module.exports = empadreModel;