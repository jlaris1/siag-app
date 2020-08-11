const mongoose = require('mongoose');
const palpadoSchema = require('./palpado.model');

palpadoSchema.statics = {
    create: function(data, cb) {
        const cargada = new this(data);
        cargada.save(cb);
    },
    getAll: function(query, cb) {
        palpadoModel.find({},{},query, cb);
    },
    get: function(id, cb) {
        this.findOne({"_id": id }, cb);
    },
}

const palpadoModel = mongoose.model('PalpadoHistorial', palpadoSchema);
module.exports = palpadoModel;