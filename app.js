const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const issueRoutes = require('./Routes/issueRoutes');
const userRoutes = require('./Routes/userRoutes');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1/users/',userRoutes);
app.use('/api/v1/issues/',issueRoutes);

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname,'client/build','index.html'));
});

module.exports = app;
