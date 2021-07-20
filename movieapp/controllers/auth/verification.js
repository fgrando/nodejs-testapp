const jwt = require('jsonwebtoken')
const { readFileSync } = require('fs')
const createError = require('http-errors')
const {dbConn} = require('../../configuration')



const secret = readFileSync('./private.key', 'utf8')


const getVerify = (req, res, next) => {

    const token = req.query['token']
    try{
        const decoded = jwt.verify(token, secret);
        dbConn('users', async (db)=>{
            // use the $set operator to change only one field
            const modifiedDocs = await db.updateOne({username: decoded['username']}, {'$set': {verified: true} });
            if (modifiedDocs.modifiedCount === 0) {
                return next(createError(404))
            }

            res.json({
                message: 'Your account has been verified'
            })

        })

    } catch(err) {
        next(createError(400))
    }
}

module.exports = {
    getVerify
}