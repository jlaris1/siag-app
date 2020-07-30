const User = require('./auth.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'secretkey12345';


exports.createUser = (req, res, next) => {
    const newUser = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        pass: bcrypt.hashSync(req.body.pass)
    }

    User.create(newUser, (error, user) => {
        if(error && error.code === 11000 ) return res.status(409).send('Email already exist.');
        if(error) return res.status(500).send('Server error');
        
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({
            id: user.id
        }, SECRET_KEY, { expiresIn: expiresIn});

        const dataUser = {
            name: user.name,
            username: user.username,
            email: user.email,
            accessToken: accessToken,
            expiresIn: expiresIn
        }
        // Response
            res.send({dataUser});

    });
}

exports.loginUser = (req, res, next) => {
    const userData = {
        username: req.body.username,
        pass: req.body.pass
    };

    console.log(userData);

    User.findOne({username: userData.username}, (error, user) => {
        if (error) return res.status(500).send('Server error.');
        
        if (!user) {
            // Email doesn't exist
            res.status(409).send({message: 'Something is wrong'});
        } else {
            const resultPass = bcrypt.compareSync(userData.pass, user.pass);

            if(resultPass){
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({id: user.id}, SECRET_KEY, {expiresIn: expiresIn});
                
                const dataUser = {
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    accessToken: accessToken,
                    expiresIn: expiresIn
                }

                res.send({dataUser});
            } else {
                // Wrong password
                res.status(409).send({message: 'Something is wrong pass'});
            }

        }

    });
}