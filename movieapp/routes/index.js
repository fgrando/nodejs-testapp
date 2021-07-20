
const authRouter = require('./auth');
const movieRouter = require('./movie');
const commentRouter = require('./comment');

module.exports = (app) => {

    app.use('/auth',authRouter);

    app.use(movieRouter);

    app.use(commentRouter);


    app.get('/', (req, res, next) => {
        res.send('welcome to home page');
        // res.json({
        //     message: "welcome to home"
        // });

        //res.redirect('/user');
    });
};