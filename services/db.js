//import momgoose
const mongoose=require('mongoose')

// then define connection string
mongoose.connect('mongodb://localhost:27017/jobportal',{
    useNewUrlParser:true
});


//model creation

const Jobfeed=mongoose.model('Jobfeed',{
   id:Number,
   title:String,
   company:String,         //schema creation
   place:String,
   salary:Number

})

const User=mongoose.model('User',{
    username:String,
    mail:String,
    password:String
});

const Wishlist=mongoose.model('Wishlist',{
    id:Number,
    title:String,
    company:String,         //schema creation
    place:String,
    salary:Number
})


const Applied=mongoose.model('Applied',{
    id:Number,
    title:String,
    company:String,         //schema creation
    place:String,
    salary:Number
})
//export 
module.exports={
User,Jobfeed,Wishlist,Applied
}