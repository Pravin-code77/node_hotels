const mongoose = require('mongoose');
//Define the mongodb connection URL
const mongoURL = 'mongodb://127.0.0.1:27017/Hotel' //Replace 'mydatabase' with your databases name
//Set up MongoDB connection
mongoose.connect(mongoURL)
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