const mongoose=require('mongoose')

const personSchema=mongoose.Schema({

    name:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},

role:{type:String,default:'user'}},
{timestamps:true})

const Person=mongoose.model('persons',personSchema)
module.exports=Person