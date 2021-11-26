const express = require('express');
const Router = express.Router();
const user = require('../models/UserModel');


Router.get('/', async (req,res)=>{
    const users = await user.find({})
    if(!users) console.log('err');

    res.status(200).json(users);
 });

 Router.post('/', async (req,res)=>{
    const newIssue = await user.create(req.body);
    res.status(201).json(newIssue);
 });

 module.exports = Router;