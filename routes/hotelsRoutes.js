const Router=require('express').Router()
const hotelController = require('../controllers/hotelControllers')
//*const userController=require('../controllers/userController')
const {isAuth,isAdmin}=require('../middlewares/authMiddleware')

//pblic routes
Router.get('/get',hotelController.get)
//private route
Router.post('/add',isAuth,isAdmin,hotelController.add)

Router.post('/update',isAuth,isAdmin,hotelController.update)

Router.post('/deleteht',isAuth,isAdmin,hotelController.delete)


module.exports=Router