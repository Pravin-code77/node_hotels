const mongoose = require('mongoose');
//Define the mongodb connection URL
//const mongoURL = process.env.MONGODB_URL_LOCAL //Replace 'mydatabase' with your databases name locally
const mongoURL = process.env.MONGODB_URL;  //connect online database 
//Set up MongoDB connection
mongoose.connect(mongoURL);
//get default connection
//mongoose maintains a default connnection object representing mongodb connection
const db = mongoose.connection;
// Connection events
db.on("connected", () => {
  console.log("✅ Connected to MongoDB server");
});

db.on("error", (err) => {
  console.error("❌ MongoDB connection error:", err);
});

db.on("disconnected", () => {
  console.log("⚠️ MongoDB disconnected");
});
//export database connection
module.exports = db;