const express = require('express');

const app = express();

// application root router
app.get('/', (req, res) => res.send('Hi, I am Zawad'));

// application /hello router
app.get('/hello', (req, res) => res.send('<h1> Hello Express.js</h1>'));

app.listen(3000, () => console.log("App is up and running"));
