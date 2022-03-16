const express = require('express');
const users = require('../apiServices/users/routes');

const router = express.Router();

router.use('/user', users);


module.exports = router;
