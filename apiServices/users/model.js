const { createUser } = require('./dao');
const userDao = require('./dao');

module.exports = {
    async getUser(id){
        return userDao.getUser(id);
    },
    async createUser(user){
        return userDao.createUser(user)
    }
}