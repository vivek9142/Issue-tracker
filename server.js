const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const db = process.env.DATABASE.replace('<PASSWORD>',process.env.PASSWORD);

mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((con)=> {
    console.log('connection established')
}).catch(err => console.log(`Connection Failed Err : ${err}`));

const app = require('./app');


app.listen(process.env.PORT,()=>{
    console.log('server is running in 3001');
});