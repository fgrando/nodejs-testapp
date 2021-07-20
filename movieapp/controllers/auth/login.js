const { NetworkAuthenticationRequire } = require('http-errors')
const createError = require('http-errors')
const {User} = require('../../models')
const jwt = require('jsonwebtoken');
const {readFileSync} = require('fs');

const postLogin = (req, res, next) => {
    User.login(req.body)
    .then(result =>{
        // result can be error
        if (result instanceof Error){
            return next(result);
        }

        const secret = readFileSync('./private.key','utf8');
        const token = jwt.sign({_id: result._id, username: result.username}, secret, {
            'expiresIn': '24h'
        })

        res.json({token});
    })
    .catch(err=>{
        next(createError(500));
    })
}

module.exports =  {
    postLogin,
};

