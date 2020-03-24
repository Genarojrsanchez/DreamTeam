const express = require('express');
const mongoose = require('mongoose');
const app = express();
const session = require('express-session');

app.use(express.json());
app.use(express.static('public'));
app.use(session({
    secret:'feedmeseymour',
    resave:false,
    saveUninitialized:false
}));

//CONTROLLERS


//


mongoose.connect('mongodb://localhost:27017/meancrud', {useNewUrlParser:true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
    console.log('connected to mongoose');
})

app.listen(3000, () => {
    console.log('listening');
})
