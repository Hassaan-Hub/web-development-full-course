const express = require('express');
const authRouter = require('./routers/auth.router');
const cookieParser = require("cookie-parser");
const postRouter = require('./routers/post.router');

const app = express();
app.use(express.json());
app.use(cookieParser())

app.use('/api/auth/', authRouter)

app.use('/api/posts/', postRouter)

module.exports = app;