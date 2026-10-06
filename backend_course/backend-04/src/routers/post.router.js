const express = require('express');
const jwt = require("jsonwebtoken");
const User = require('../models/auth.model');

const postRouter = express.Router();

postRouter.post('/create', async (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        
        const user = await User.findById({
            _id: decoded.id
        })
        
        console.log(user._id);
        console.log(decoded);
    }catch(error){
        return res.status(401).json({
            message: "Token is invalid"
        })
    }
    
    res.status(201).json({
        message: "create post",
        cookies: req.cookies
    })
})


module.exports = postRouter;