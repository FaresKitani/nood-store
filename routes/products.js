const express       = require('express')
const productModel  = require('./../models/product')
const router        = express.Router()


router.get('/new',(req,res)=>{

    res.render('product/new',{product: new productModel()})
})
router.get('/all-product',async(req,res)=>{
    const allproducts = await productModel.find()
    res.render('product/all-product',{products: allproducts})
})

// to go in edite page
router.get('/edit/:id', async(req,res)=>{
    const product = await productModel.findById(req.params.id)
    res.render('product/edit',{product: product})
})
router.put('/:id',async(req,res, next)=>{
    req.product = await productModel.findById(req.params.id) 
    next()
},saveProductAndRedirict('edit'))

router.get('/',(req,res)=>{
    res.render('product',{product: new productModel()})
})

router.post('/',async(req,res)=>{
   
    const product = new productModel({
        name : req.body.name,
        description : req.body.description,
        price : req.body.price,
        markdown : req.body.markdown

    })
    try{
        product= await product.save()
        res.redirect('/product/new')
    }catch(e){
        res.render('product/new',{product: new productModel()})
        
    } 
    
   
    
})

router.delete('/:id',async(req,res)=>{
    await productModel.findByIdAndDelete(req.params.id)
    res.redirect('/product/all-product')
})





function saveProductAndRedirict(path){
    return async(req,res)=>{
        let product              =  req.product
        product.name             =  req.body.name
        product.description      =  req.body.description
        product.price            =  req.body.price
        product.markdown         =  req.body.markdown
        product.available        =  req.body.available       
            
    try{
        product = await product.save()
        res.redirect(`/product/all-product`)
    }catch(e){
        
        res.render(`product/all-product`,{product: product})
    }
    }

}












module.exports = router