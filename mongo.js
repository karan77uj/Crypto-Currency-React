const { type } = require("@testing-library/user-event/dist/type");
const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/reactproject")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("SignUp",newSchema)

module.exports=collection