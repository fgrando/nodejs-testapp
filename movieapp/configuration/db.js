const { MongoClient } = require('mongodb');

const _uri = process.env.MONGODB_URI

const dbConn = (coll, cb, coll2) => {
    MongoClient.connect(_uri)
    .then(async (client) => {
        const db = client.db('sample_mflix').collection(coll);

        let db2;
        if(coll2) {
            db2 = client.db('sample_mflix').collection(coll2);
        }
        await cb(db, db2); // wait callback to be finished
        client.close();
    })
    // .catch(err => {console.log(err)}); if db is bronken, this app cannot run.
};

// dbConn('movies', async (db) =>{
//     const movie = await db.findOne();
//     console.log(movie);
// })

module.exports = dbConn;