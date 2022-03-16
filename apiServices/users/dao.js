// DATA ACCESS LAYER -> DBs
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const middlewares = require('../../middlewares/user')

module.exports = {
    async getUser(id) {
        return new Promise((resolver, reject)=>{
            prisma.user.findMany({})
            .then((data) => {
                return resolver(data)
            })
            .catch((err) => {
                return reject(err)
            })
        })
    },
    async createUser({username, email, password}){
        console.log(username,email,password)
            return prisma.user.create({
                data: {
                    username,
                    email,
                    password
                }
            }).then(data => {
                return data
            })
            .catch(err => {
                console.log(err)
                return {
                    error: true,
                    status: 400,
                    msg: "No se pudo crear el usuario"
                }
            })
    }
}