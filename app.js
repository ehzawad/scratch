const express = require('express');

const app = express();

// application root router
app.get('/', (req, res) => res.send('Hi, I am Zawad'));

app.listen(3000);
