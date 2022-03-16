const express = require('@awaitjs/express');
const controller =  require('./controllers');
const middlewares = require('../../middlewares/index')

// Inicialize Express router 
const router = express.Router();


// Rutas - Routes

// registro - register
router.postAsync('/register', middlewares.user.isEmailValidate,controller.register);

// ingreso - login
router.postAsync('/login', middlewares.user.isEmailValidate, controller.login);

// Funciones de usuario
router.getAsync('/', controller.getUser);
router.postAsync('/',middlewares.user.isUserInDB, controller.createUser)


// Exportamos rutas que estan dentro de router - export routes is taht in router
module.exports = router;