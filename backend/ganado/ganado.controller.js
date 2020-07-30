const Ganado =  require('./ganado.dao');

exports.createGanado = (req, res, next) => {
    const newGanado = {
        noArete: req.body.noArete,
        noAnimal: req.body.noAnimal,
        edad: req.body.edad,
        sexo: req.body.sexo,
        tipo: req.body.tipo,
        color: req.body.color,
        estatus: req.body.estatus,
        situacion: req.body.situacion,
        crianzaCompra: req.body.crianzaCompra,
        observaciones: req.body.observaciones
    }

    Ganado.create(newGanado, (error,  ganado) =>{
        if(error && error.code === 11000 ) return res.status(409).send('NoArete already exist.');
        if(error) return res.status(500).send('Server error ' + error);

        const dataGanado = {
            noArete: ganado.noArete,
            noAnimal: ganado.noArete,
            edad: ganado.edad,
            sexo: ganado.sexo,
            tipo: ganado.tipo,
            color: ganado.color,
            estatus: ganado.estatus,
            situacion: ganado.situacion,
            crianzaCompra: ganado.crianzaCompra,
            observaciones: ganado.observaciones
        }
        
        // Response
        res.send({dataGanado});
    });
}

exports.getAll = (req, res, next) => {
    var page = parseInt(req.query.page)
    var size = parseInt(req.query.size)
    var query = {}

    if(page < 0 || page === 0) {
        result = {'status': 401,'message':'invalid page number,should start with 1'};
        return res.json(result);
    }

    query.skip = size * (page - 1)
    query.limit = size

    Ganado.getAll(query, (error, data) => {
        if(error) return res.status(500).send('Server error: ' + error);
        res.send(data);
    });

}

exports.get = (req, res, next) => {

}