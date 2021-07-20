const {dbConn} = require('../configuration');
const {ObjectId} = require('bson');
const createError = require('http-errors');


const getMovies = (req, res, next) => {
    const pageNum = parseInt(req.params.page);
    if (isNaN(pageNum)){
        return next(createError(400));
    }

    const moviesToSkip = (pageNum-1)*10;

    // DB pagination:

    dbConn('movies', async (db)=>{
        try{
            const movies = await db.find({}).skip(moviesToSkip).limit(10).toArray();
            res.json(movies);
        }
        catch{
            return next(createError(500));
        }
    })
}


const getOneMovie = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id)){
        return next(createError(400));
    }
    const _id = new ObjectId(req.params.id);

    dbConn('movies', async (db)=>{
        try{
            //const movie = await db.findOne({_id : _id});
            const movie = await db.findOne({_id});
            if(!movie){
                return next(createError(404));
            }
            res.json(movie);
        }
        catch(err){
            return next(createError(500));
        }
    })
}

module.exports = {
    getMovies,
    getOneMovie
}