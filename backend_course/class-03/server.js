const dns = require("dns");

dns.setServers(["1.1.1.1"]);

const app = require('./src/app');
const connectDB = require('./src/db/db');

connectDB();

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
    
})