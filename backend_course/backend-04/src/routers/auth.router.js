const express = require('express');
const registerUser = require('../controllers/auth.controllers');

const authRouter = express.Router();

/* POST /api/auth/create-user */
authRouter.post('/create-user', registerUser)

// authRouter.get('/test', (req, res)=>{
//     console.log("cookies", req.cookies);
//     res.status(200).json({
//         cookie: req.cookies,
//         message: "get cookies"
//     })
    
// })

module.exports = authRouter;