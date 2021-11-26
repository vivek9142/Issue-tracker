const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

const issueRoutes = require('./Routes/issueRoutes');
const userRoutes = require('./Routes/userRoutes');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/users/',userRoutes);
app.use('/issues/',issueRoutes);


module.exports = app;
