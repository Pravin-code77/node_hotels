// console.log("server file is running");
// function add(a,b){
//     return a * b;
// }
// const result =add(5,3);
// (function(){
//    console.log('pravin');
// })();
// console.log(result);

// //callback function
// function callback(){
//     console.log('callback function is running');
// }

// const add = function(a,b){
//     let res = a+b;
//     console.log('result',res);
//     callback();
// }
// add(5,7);

// var fs = require('fs');
// var os = require('os');

// let user = os.userInfo();
// // console.log('user : ',user);
// // console.log('user : ',user.username);

// fs.appendFile('gretting.txt','Hi '+ user.username +'!\n',()=>(
//     console.log('file is created')
// ))

// var notes = require('./Notes.js')
// var las = require('lodash')
// console.log('server file is running')
// let age = notes.age;
// console.log('age : ', age);

// const jsonstring = '{"name":"pravin","age":21,"city":"phaltan"}';
// const jsonObject = JSON.parse(jsonstring);
// console.log(jsonObject);

// const obj = {
//     name:"pravin",
//     age:30,
//     city:"phaltan"
// }
// const jsonstring = JSON.stringify(obj);
// console.log(jsonstring);

const bodyParser = require('body-parser');

const express = require('express');
const app = express();
const db = require('./db')
require('dotenv').config();
app.use(bodyParser.json());


//import Menu Router
const menuRoutes = require('./route/menuRoutes');
//use routers
app.use('/menuitem',menuRoutes);
//import router
const personRoutes = require('./route/personRoutes');

//use the routers
app.use('/person',personRoutes);

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log("Server running on port 3001");
})