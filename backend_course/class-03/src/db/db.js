const mongoose = require('mongoose');

async function connectDB() {
    await mongoose.connect("mongodb+srv://yt:Og4a1r3Wf6mRIXgv@youtub-complete-backend.ysmyoex.mongodb.net/hally");

    console.log("connected to DB");   
}

module.exports = connectDB;