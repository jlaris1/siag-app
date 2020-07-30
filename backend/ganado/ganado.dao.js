const mongoose = require('mongoose');
const ganadoSchema = require('./ganado.model');

ganadoSchema.statics = {
  create: function(data, cb) {
    const ganado = new this(data);
    ganado.save(cb);
  },
  getAll: function(query, cb) {
    ganadoModel.find({},{},query, cb);
  },
  get: function(cb) {
    this.find(cb);
  }

}

const ganadoModel = mongoose.model('Ganado', ganadoSchema);
module.exports = ganadoModel;