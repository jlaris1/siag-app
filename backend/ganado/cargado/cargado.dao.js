const mongoose = require('mongoose');
const cargadoSchema = require('./cargado.model');

cargadoSchema.statics = {
    create: function(data, cb) {
        const cargada = new this(data);
        cargada.save(cb);
    },
    getAll: function(query, cb) {
        cargadoModel.find({},{},query, cb);
    },
    get: function(id, cb) {
        this.findOne({"_id": id }, cb);
    },
}

const cargadoModel = mongoose.model('CargadaHistorial', cargadoSchema);
module.exports = cargadoModel;