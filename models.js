const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    
    time:{
        type:String,
        stamp:Date.now()
    },
    author: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required:true,
    }
});

module.exports = new mongoose.model('user', userschema);