const mongoose               = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        
    },
    description:{
        type: String,
        
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    available:{
        type:Boolean,
        default: true,
        
    },
    price:{
        type: String ,
        required : true,

    },
    markdown:{
        type: String,
        
       
    },

})

module.exports = mongoose.model('product',productSchema)