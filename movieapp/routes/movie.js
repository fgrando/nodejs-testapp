const {Router} = require('express');
const {getMovies} = require('../controllers')
const {getOneMovie} = require('../controllers')
const {auth} = require('../middlewares')


const router = Router();

router.get('/movies/:page', getMovies)
router.get('/movie/:id', auth, getOneMovie)


module.exports=router;