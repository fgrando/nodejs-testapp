const {Router} = require('express')
const {postComment, putComment, deleteComment, getComments} = require('../controllers')
const {auth} = require('../middlewares')

const router = Router();

router
    .post('/createComment/:movieId', auth, postComment)
    .put('/editComment/:commentId', auth, putComment)
    .delete('/deleteComment/:commentId', auth, deleteComment)
    .get('/getComments/:movieId/:page', auth, getComments)

module.exports = router;