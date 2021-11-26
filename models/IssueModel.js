const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema(
    {
        description:String,
        severity:String,
        status:String,
        createdDate:String,
        resolvedDate:String,
        views:Number
    }
);

const Issue = mongoose.model('Issue',IssueSchema);

module.exports = Issue;