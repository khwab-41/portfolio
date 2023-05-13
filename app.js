const express = require("express");
const app = express();
const path = require('path');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/x_base_name_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
    res.render('home');
});

app.listen(3000, (err) => {
    if (err)
        throw err;
    console.log("Server running on port 3000");
});