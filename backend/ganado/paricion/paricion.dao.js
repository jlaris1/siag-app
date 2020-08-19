const mongoose = require('mongoose');
const paricionSchema = require('./paricion.model');

paricionSchema.statics = {
    create: function(data, cb) {
        const cargada = new this(data);
        cargada.save(cb);
    },
    getAll: function(query, cb) {
        paricionModel.find({},{},query, cb);
    },
    get: function(id, cb) {
        this.findOne({"_id": id }, cb);
    },
}

const paricionModel = mongoose.model('Paricion', paricionSchema);
module.exports = paricionModel;