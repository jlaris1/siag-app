'use strict'
const cors = require('cors');
const authRoutes = require('./auth/auth.routes');
const ganadoRoutes = require('./ganado/ganado.routes');
const express = require('express');
const propierties = require('./config/properties');
const PORT = require('./config/properties').PORT; 
const DB = require('./config/db');
const http = require('http');
// init DB
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

http.createServer(app).listen(PORT, () => console.log(`Server runing on port ${PORT}`));

//app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));