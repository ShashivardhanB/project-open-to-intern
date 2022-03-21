const mongoose = require('mongoose');
const collegeSchema = new mongoose.Schema( {
    name: {
        type : String ,
        lowercase:true,
        required :true,
        unique:true

    },
    fullName: {
        type : String ,
        required : true
    },
    logoLink : {
        type : String ,
        required : true ,

      
    },
    isDeleted:{
        type:Boolean,
        defualt:false
    }
    
    
 } , { timestamps: true });

module.exports = mongoose.model('college', collegeSchema ) 