const express = require('express');
const mongoose = require('mongoose');
const app = express();
require("dotenv").config();
const bcrypt = require("bcryptjs")
const session = require('express-session');
const db = mongoose.connection;

// ======middleware=====
app.use(express.json());
app.use(express.static('public'));
app.use(session({
    secret:'feedmeseymour',
    resave:false,
    saveUninitialized:false
}));

//CONTROLLERS
const drinksController = require('./controllers/drinks.js');
app.use('/tipsy', drinksController);

const usersController = require("./controllers/users.js");
app.use("/users", usersController);

const sessionController = require('./controllers/session.js');
app.use('/session', sessionController);

//


mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify: false});
mongoose.connection.once('open', () => {
    console.log('connected to mongoose');
})

app.listen(process.env.PORT, () => {
    console.log(`listening on port`);
})


db.on("error", (err) => (console.log(err.message + "is mongod not running?")));
db.on("connected", () => (console.log("mongo connected: to the URL")));
db.on("disconnected", () => (console.log("mongo disconnected")));
