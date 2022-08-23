const mongoose               = require('mongoose')

const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true,
        
    },
    last_name:{
        type: String,
        required: true,
    },
    email:{
        type: email,
        required: true,
        
    },
    password:{
        type: password,
        required: true,
        
    },
    birth_Date:{
        type: birth_Date ,
        

    },
    admin:{
        type:Boolean,
        default: false,
        
       
    },
    created_at:{
        type: Date,
        default: Date.now()
    },

})

module.exports = mongoose.model('user',userSchema)