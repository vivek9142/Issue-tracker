const express = require('express');
const Router = express.Router();
const Issue = require('../models/IssueModel');

Router.get('/', (req,res)=>{
    Issue.find({},(err,docs)=>{
        if(err) console.log(err);

        res.status(200).json(docs);
    })
});


Router.post('/', async(req,res)=>{ 
    const newIssue = await Issue.create(req.body);
    res.status(201).json(newIssue);
 });

Router.get('/:id', async (req,res)=>{
    const issue = await Issue.findById(req.params.id);
    res.status(200).json(issue);
});

Router.patch('/:id', async(req,res)=>{ 
    const id = req.params.id;
    const updatedIssue = await Issue.findByIdAndUpdate(id,req.body,{
        new:true
    });

    if(!updatedIssue) console.log('No Issue found by the ID - '+id);
    await res.status(200).json(updatedIssue);
 });

Router.delete('/:id', async(req,res)=>{ 
    const id = req.params.id;
    const deletedIssue = await Issue.findByIdAndDelete(id);

    if(!deletedIssue) console.log('No Issue found by the ID - '+id);
    await res.status(204).json({
        status:'success',
        data:null
    });
 });


module.exports = Router;
 
