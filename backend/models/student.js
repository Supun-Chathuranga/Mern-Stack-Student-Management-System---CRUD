const mongoose=require("mongoose");

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    birthday:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Students",studentSchema);
