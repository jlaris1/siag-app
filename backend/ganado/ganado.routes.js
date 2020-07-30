const Ganado = require('./ganado.controller');

module.exports = (router) => {
    router.post('/ganado/save', Ganado.createGanado);
    router.get('/ganado', Ganado.getAll)
};