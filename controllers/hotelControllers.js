const Hotels =require ('../models/hotelsSchema')
const hotelController={
get:async (req,res)=>{
const hotels=await Hotels.find()
res.send(hotels)

},
add:async (req,res)=>{ 
const{name,description,rate,price,image}=req.body
const hotel=await Hotels.create({name,description,rate,price,image})
res.status(200).json({status:'success',body:hotel})
},



update:async (req,res)=>{
    await Hotels.updateOne({name:req.body.name},{name:req.body.newname})
    res.send("hotel updated")
    },



    
delete:async(req,res)=>{
        const test=await Hotels.deleteOne({name:req.body.name})
        if (test.deletedCount>0)
        res.send('hotel deleted')
        else
        res.send("erreur")
    }

}
module.exports=hotelController