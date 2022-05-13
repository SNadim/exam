// external imports
const express = require('express');

// internal imports
const {getLogin} = require('../controllers/loginController');

const router = express.Router();

router.use("/",getLogin);

module.exports = router;