const express       = require('express')
const UserModel     = require('./../models/user')
const router        = express.Router()



router.get('/login',(req,res)=>{

    res.render('auth/login',{user: new UserModel()})
})
router.get('/regester',(req,res)=>{

    res.render('auth/regester',{user: new UserModel()})

})

router.post('/login',(req,res)=>{
    if(req.body.password != req.body.password2)res.render('auth/login')

    const NewUser = UserModel({
        
        email : req.body.email,
        password : req.body.password,
       
    })
    try{
        NewUser = await NewUser.save()
        res.redirect('/')
    }catch(e){
        res.render('/')
        
    } 
    res.render('auth/login',{user: new UserModel()})
})
router.post('/regester',async(req,res)=>{

    if(req.body.password != req.body.password2)res.render('auth/regester')

    const NewUser = UserModel({
        first_name : req.body.FirstName,
        last_name : req.body.last_name,
        email : req.body.email,
        password : req.body.password,
        birth_Date : req.body.date,
    })
    try{
        NewUser = await NewUser.save()
        res.redirect('/')
    }catch(e){
        res.render('/')
        
    } 

})













module.exports = router