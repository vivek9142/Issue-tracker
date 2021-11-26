const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        firstName:String,
        lastName:String,
        location:String,
        email:String,
        mobNo:Number,
        password:String,
    }
);

const User = mongoose.model('User',UserSchema);

module.exports = User;