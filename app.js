const express = require('express');

const app = express();

// application root router
// app.get('/', (req, res) => res.send('Hi, I am Zawad'));
// now renders a templating engine
app.set('view engine', 'pug');
app.get('/', (req, res) => res.render('index'));

// application /hello router
app.get('/hello', (req, res) => res.send('<h1> Hello Express.js</h1>'));

app.listen(3000, () => console.log("App is up and running"));
