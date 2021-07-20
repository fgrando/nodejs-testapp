const { dbConn } = require('../configuration');
const {userValidator, loginSchema} = require('../validator');
const {hashSync, compareSync} = require('bcryptjs');

class User{
    constructor(userData){
        this.userData = { ...userData };
    };

    static validate(userData){
        const result = userValidator.validate(userData);
        return result;
    }

    static login(userData) {
        return new Promise((resolve, reject) => {
            const validation = loginSchema.validate(userData);
            if(validation.error){
                const error = new Error(validation.error.message)
                error.statusCode = 400;
                return resolve(error);
            }

            dbConn('users', async (db) =>{
                try{
                    // find user
                    // this does not user projection, so can have performance issues
                    // const user = await db.findOne( {$or: [
                    //     {username: userData['username']},
                    //     {email: userData['username']}
                    // ]})
                    // with projection:
                    const user = await db.findOne( {$or: [
                        {username: userData['username']},
                        {email: userData['username']}    ]
                    },
                    {projection: {username:1, password:1} })

                    // weird comparison (|| will keep doing things even if user is found?)
                    if (!user || !compareSync(userData['password'], user.password)) {
                        const error = new Error('Please enter valid user/password');
                        error.statusCode = 404;
                        return resolve(error);
                    }

                    resolve(user)

                } catch (err){
                    reject(err);
                }
            })
        })
    }

    save(cb){
        dbConn('users', async (db) =>{
            try {
                const hashedPass = hashSync(this.userData['password'], 12);
                this.userData['password'] = hashedPass;
                this.userData['verified'] = false;
                await db.insertOne(this.userData);
                cb();
            } catch(err) {
                cb(err);
            }
        });
    };

    checkExistence(){
        return new Promise((resolve, reject) => {
            dbConn('users', async (db)=>{
                try{

                const user = await db.findOne(
                    {$or: [
                        {username: this.userData['username']},
                        {email: this.userData['email']}
                    ]});

                if(!user){
                    resolve({
                        check: false
                    })
                } else if(this.userData['username'] === user.username) {
                    resolve({
                        check: true,
                        message: 'this username is already in use'
                    });
                } else if(this.userData['email'] === user.email) {
                    resolve({
                        check: true,
                        message: 'this email is already in use'
                    });
                }
            } catch (err) {
                reject(err);
            }
            });
        })
    }
};

// const user = new User({
//     username: "Fernando",
//     email: "test@example.com",
//     password: "a1234",
//     first_name: "fernando",
//     last_name: "grando"
// });

// user.checkExistence()
// .then(check => {
//     console.log(check);
// })
// .catch(err => console.log(err));

// User.login({
//     username: "Fernando3",
//     password: "P@asdf12345",
// })
// .then(res => console.log(res) )

module.exports=User;