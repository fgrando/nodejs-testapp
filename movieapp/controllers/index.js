const { postLogin } = require('./auth/login');
const { getVerify } = require('./auth/verification');
const { postSignup } = require('./auth/signup');
const { getMovies, getOneMovie} = require('./movieC')
const {postComment, putComment, deleteComment, getComments} = require('./commentC')

module.exports = {
    postLogin,
    getMovies,
    getOneMovie,
    postSignup,
    getVerify,
    postComment,
    putComment,
    deleteComment,
    getComments
};