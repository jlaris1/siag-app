const Ganado = require('./ganado.controller');

module.exports = (router) => {
    router.post('/ganado/save', Ganado.createGanado);
    router.get('/ganado', Ganado.getAll);
    router.get('/ganado/detalles/', Ganado.get);
    router.get('/ganado/editar/', Ganado.get);
    router.put('/ganado/update/:id', Ganado.update);

    //router.post('/ganado/palpado/', Ganado.palpado);
    //router.post('/ganado/empadre/', Ganado.empadre);
    router.post('/ganado/cargada/', Ganado.cargada);
    //router.post('/ganado/delete/:id', Ganado.delete);

};