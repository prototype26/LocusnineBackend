const mongoose = require('mongoose');
//schema definition
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name mandatory']
    },
    email:{
        type:String,
        required:[true,'email mandatory'],
        unique:true
    },
    designation:{
        type:String,
        required:[true,'designation mandatory']
    },
    phone:{
        type:Number,
        required:[true,'phone mandatory']
    },
    
});

//model creation
const User = mongoose.model('User',userSchema);
module.exports = User;