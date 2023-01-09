const mongoose=require('mongoose')
//mongodb+srv://DongHoHwang:wjdgP1202!@cluster0.se1eelf.mongodb.net/test
mongoose
    .connect('mongodb://localhost:27017/food-ordering',{useNewUrlParser:true})
    
    .catch(e=>{
        console.error('Connection error',e.message)
    })
const db=mongoose.connection

module.exports=db

