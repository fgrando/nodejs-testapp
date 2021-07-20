const {Router} = require('express');
const {postLogin} = require('../controllers')
const {postSignup} = require('../controllers')
const {getVerify} = require('../controllers')

const router = Router();

router
    .post('/login', postLogin)
    .post('/signup', postSignup)
    .get('/verify', getVerify)


module.exports=router;