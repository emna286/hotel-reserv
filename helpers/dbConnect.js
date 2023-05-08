const mongoose=require('mongoose')
require('dotenv').config();
const connect=()=>{
    mongoose.connect(`mongodb+srv://emnabgeudriya:${process.env.MONGO_PSW}@cluster0.ophtgb9.mongodb.net/list`)
    .then(()=>console.log('connected'))
    .catch(err=>console.log(err))
}
module.exports=connect