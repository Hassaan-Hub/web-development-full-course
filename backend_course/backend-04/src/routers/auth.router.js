const express = require('express');
const registerUser = require('../controllers/auth.controllers');

const authRouter = express.Router();

authRouter.post('/create-user', registerUser)

module.exports = authRouter;