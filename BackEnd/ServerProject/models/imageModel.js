const mongoose = require('mongoose');
const uniqueValidator=require('mongoose-unique-validator');

const {Schema} = mongoose;

const imageSchema = new Schema({
    user:{
        type:String
    },
    title:{
        type:String,
        unique:true,
        required:[true,"title is required"]
    },
    photos:[Object]
})

imageSchema.plugin(uniqueValidator);

const Image=mongoose.model('imageInfo',imageSchema);

module.exports={Image};