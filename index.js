
//import the express
const express=require('express')

//import dataservice
const dataService=require('./services/dataService')


//import cors
const cors=require('cors')
const { application } = require('express')


//create an application using  express
const app=express()


//to parse the json requset from db.js
app.use(express.json())


//to connect with the backend and frontend
app.use(cors({
    origin:'http://localhost:4200'
}))


//to check whether it is working
app.listen(3000,()=>{
    console.log('listening to port 3000');
})





//api to get all jobs
app.get('/all-jobs',(req,res)=>{
    dataService.getjobs()
    .then(result=>{
        res.status(result.statusCode).json(result)

    })

})



app.post('/register',(req,res)=>{
    console.log(req.body);
    dataService.register(req.body.username,req.body.mail,req.body.password)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})


//api to post wishlist items
app.post('/addtowishlist',(req,res)=>{
    dataService.addtowishlist(req.body.id,req.body.title,req.body.company,req.body.place,req.body.salary)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })

})

//api to post applied job

app.post('/addtoappliedjobs',(req,res)=>{
    dataService.addtoapplied(req.body.id,req.body.title,req.body.company,req.body.place,req.body.salary)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })

})






//api to get wishlist
app.get('/getwishlist',(req,res)=>{
    dataService.getwishlist()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })

})


//api to get applied jobs
app.get('/getappliedjobs',(req,res)=>{
    dataService.getapplied()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })

})


//api to post back to applied jobs

app.post('/backtoapplied',(req,res)=>{
    dataService.backtoapplied(req.body.id,req.body.title,req.body.company,req.body.place,req.body.salary)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })

})

//api to delete wishlist product
app.delete('/deletwish/:id',(req,res)=>{
    dataService.deletewish(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})









