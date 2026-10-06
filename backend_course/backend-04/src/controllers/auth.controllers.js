const Joi = require("joi");
const User = require("../models/auth.model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(30).required().messages({
        "string.empty": "Username is required",
        "string.min": "Username must be at least 3 characters",
        "string.max": "Username must not exceed 30 characters",
    }),

    email: Joi.string().email().required().messages({
        "string.empty": "Email is required",
        "string.email": "Please enter a valid email",
    }),

    password: Joi.string().min(6).required().messages({
        "string.empty": "Password is required",
        "string.min": "Password must be at least 6 characters",
    }),
});

module.exports = registerSchema;


const registerUser = async (req, res) => {
    try {
        await registerSchema.validateAsync(req.body);
        const { username, email, password } = req.body

        const hashPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            username, email, password: hashPassword
        })

        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET)

        res.cookie("token", token)
        
        res.status(201).json({
            message: "user created successfully",
            user
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "internal server error",
            error: error.message
        })
    }
}

module.exports = registerUser