'use strict'
const cors = require('cors');

const authRoutes = require('./auth/auth.routes');
const ganadoRoutes = require('./ganado/ganado.routes');

const express = require('express');    
const PORT = require('./config/properties').PORT; 

const DB = require('./config/db');
// Init DB
DB();

const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
app.use('/api', router);

authRoutes(router);
ganadoRoutes(router);

app.use(cors());

router.get('/', (req, res) => {
    res.send(' Hellow from home!');
});

app.use(router);
app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));