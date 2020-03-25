const express = require('express');
const mongoose = require('mongoose');
const app = express();
require("dotenv").config();
const session = require('express-sessions');
const db = mongoose.connection;


app.use(express.json());
app.use(express.static('public'));
app.use(session({
    secret:'feedmeseymour',
    resave:false,
    saveUninitialized:false
}));

//CONTROLLERS
app.get("/", (req, res) => {
  console.log("hello world");
})

//


mongoose.connect('mongodb://localhost:27017/tipsy', {useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify: false});
mongoose.connection.once('open', () => {
    console.log('connected to mongoose');
})

app.listen(3000, () => {
    console.log(`listening on ${process.env.PORT}`);
})


db.on("error", (err) => (console.log(err.message + "is mongod not running?")));
db.on("connected", () => (console.log("mongo connected: to the URL")));
db.on("disconnected", () => (console.log("mongo disconnected")));
