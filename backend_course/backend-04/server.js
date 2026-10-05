require('dotenv').config();

const dns = require("dns");
dns.setServers(["1.1.1.1"]);

const app = require("./src/app");
const connectDB = require('./src/db/db');

connectDB();

app.listen(process.env.PORT, ()=>{
    console.log(`server is runing on port ${process.env.PORT}`);
})