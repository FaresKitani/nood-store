const express                = require('express')
const mongoose               = require('mongoose')
const app                    = express()
const productRouter          = require('./routes/products')
const productModel           = require('./models/product') 
const { urlencoded } = require('express')
const methodOverride         = require('method-override')
const port                   = 5080


app.use(urlencoded({extended:false}))  // to accses data in forn in route
app.set('view engine','ejs')
app.use(express.static(__dirname));
app.use(methodOverride('_method'))  // to use put 


mongoose.connect('mongodb+srv://Fares:123@cluster0.5k49l.mongodb.net/web-store?retryWrites=true&w=majority')
.then((result) => {
    app.listen(process.env.PORT || port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })




app.get('/',(req,res)=>{

  res.render('index')

})
app.get('/categorys',async(req,res)=>{
  const products = await productModel.find()
  res.render('navComponants/categorys',{product: products}) 

})
app.get('/products', async(req,res)=>{
  const products = await productModel.find()
  res.render('navComponants/products',{product: products}) 
})
app.get('/empty',(req,res)=>{

  res.render('navComponants/empty')

})

app.use('/product',productRouter)


app.listen(5000)