const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const router = require('./router');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);


app.listen(port, () => console.log(`listening on ${port}`))