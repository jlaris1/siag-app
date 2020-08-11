const Ganado =  require('./ganado.dao');
const Cargada = require('./cargado/cargado.dao');
const Palpada = require('./palpado/palpado.dao');
const Empadre = require('./empadre/empadre.dao');

// Create new ganado
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

// Get all ganado
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

// Get or find one ganado (Edition / Details)
exports.get = (req, res, next) => {
    var id = req.query.id;

    Ganado.get(id, (error, data) => {
        if(error) return res.status(500).send('Server error: ' + error);
        res.send(data);
    });
}

/** Upadate data */
exports.update = (req, res, next) => {
    const updGanado = {
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

    console.log(req.params.id);

    Ganado.update(updGanado, req.params.id ,(error,  ganado) =>{
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

/** Set status Empadre */
exports.empadre = (req, res, next) => {
    const addEmpadre = {
        noArete: req.body.noArete,
        noAnimal: req.body.noAnimal,
        edad: req.body.edad,
    }

    Empadre.create(addEmpadre, (error,  ganado) =>{
        if(error) return res.status(500).send('Server error ' + error);

        const dataGanado = {
            noArete: ganado.noArete,
            noAnimal: ganado.noArete,
            edad: ganado.edad,
        }
        
        // Response
        res.send({dataGanado});
    });
}

/** Set status Palpado */
exports.palpado = (req, res, next) => {
    const addPalpado = {
        noArete: req.body.noArete,
        noAnimal: req.body.noAnimal,
        edad: req.body.edad,
    }

    Palpada.create(addPalpado, (error,  ganado) =>{
        if(error) return res.status(500).send('Server error ' + error);

        const dataGanado = {
            noArete: ganado.noArete,
            noAnimal: ganado.noArete,
            edad: ganado.edad,
        }
        
        // Response
        res.send({dataGanado});
    });
}

/** Set status Cargada */
exports.cargada = (req, res, next) => {
    const addCargado = {
        noArete: req.body.noArete,
        noAnimal: req.body.noAnimal,
        edad: req.body.edad,
    }

    Cargada.create(addCargado, (error,  ganado) =>{
        if(error) return res.status(500).send('Server error ' + error);

        const dataGanado = {
            noArete: ganado.noArete,
            noAnimal: ganado.noArete,
            edad: ganado.edad,
        }
        
        // Actualizar estatus del animal
        Ganado.update({situacion: req.body.situacion}, req.body.id,(error,  ganado) =>{
            if(error) return res.status(500).send('Server error ' + error);
        });
        

        // Response
        res.send({dataGanado});
    });
}

/** Delete ganado */
exports.delete = (req, res, next) => {

}