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
  get: function(id, cb) {
    this.findOne({"_id": id }, cb);
  },
  update: function(data, id, cb) {
    this.updateOne({"_id": id}, data, cb);
  }
}

const ganadoModel = mongoose.model('Ganado', ganadoSchema);
module.exports = ganadoModel;