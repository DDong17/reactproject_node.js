const mongoose=require('mongoose')

mongoose
    .connect('mongodb+srv://DongHoHwang:wjdgP1202!@cluster0.se1eelf.mongodb.net/test',{useNewUrlParser:true})
    .catch(e=>{
        console.error('Connection error',e.message)
    })
const db=mongoose.connection

module.exports=db

