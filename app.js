const express = require('express')
const app = express();
const port = 3000


import express from 'express';
import { engine } from 'express-handlebars';



app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});


app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})