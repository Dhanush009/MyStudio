const mongoose = require('mongoose');
const {isEmail} = require('validator');
const uniqueValidator=require('mongoose-unique-validator');

const {Schema} = mongoose;

const userSchema = new Schema ({
    
    name:{
        type:String,
        trim:true,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        unique:[true,"email must be unique"],
        lowercase:true,
        required:[true,"email is required"],
        validate:[isEmail,"wrong email format"]
    },
    password:{
        type:String,
        trim:true,
        minLength:6,
        required:[true,"password is required"]
    },

    albums:[],
   
    createdAt:{
        type:Date,
        default:Date.now
    }

});

userSchema.plugin(uniqueValidator);

const User= mongoose.model('userInfo',userSchema);


module.exports={User};