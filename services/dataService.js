//import db.js file
const db=require('./db')


//to add wishlist
const addtowishlist=(id,title,company,place,salary)=>{
    //data addedd to mongodb crate a model in db.js


    return db.Wishlist.findOne({id}).then(
        (result)=>{
            if(result){
                console.log(result);
                return{
                    status:true,
                    statusCode:200,
                    message:'Job already exist in wishlist'
                }
            }

            else{
                const newJob= new db.Wishlist({id,title,company,place,salary})
                newJob.save()  //data added to momgo
                return{
                    status:true,
                    statusCode:200,
                    message:'Job adedd to wishlist'
                }
            }
        }
    )


}


//to add applied jobs
const addtoapplied=(id,title,company,place,salary)=>{
    //data addedd to mongodb crate a model in db.js


    return db.Applied.findOne({id}).then(
        (result)=>{
            if(result){
                console.log(result);
                return{
                    status:true,
                    statusCode:200,
                    message:'Job already applied'
                }
            }

            else{
                const newJob= new db.Applied({id,title,company,place,salary})
                newJob.save()  //data added to momgo
                return{
                    status:true,
                    statusCode:200,
                    message:'Job applied successfully'
                }
            }
        }
    )


}


//to get applied

const getapplied=()=>{
    return db.Applied.find().then(
        (result)=>{
            if(result){
                return {
                    status:true,
                    statusCode:200,
                  jobs:result
                }
            }
    
            else{
                return {
                    status:true,
                    statusCode:200,
                 message:'You havent applied'
                }
            }
        }
    )
    }


// from wishlist to applied
    const backtoapplied=(id,title,company,place,salary)=>{
        //data addedd to mongodb crate a model in db.js
    
    
        return db.Wishlist.findOne({id}).then(
            (result)=>{
                if(result){
                    console.log(result);
                    return{
                        status:true,
                        statusCode:200,
                        message:'Job successfully applied'
                    }
                }
    
                else{
                    const newJob= new db.Wishlist({id,title,company,place,salary})
                    newJob.save()  //data added to momgo
                    return{
                        status:true,
                        statusCode:200,
                        message:'Job Already applied'
                    }
                }
            }
        )
    
    
    }
    
    





//to get wishlist

const getwishlist=()=>{
return db.Wishlist.find().then(
    (result)=>{
        if(result){
            return {
                status:true,
                statusCode:200,
              jobs:result
            }
        }

        else{
            return {
                status:true,
                statusCode:200,
             message:'Your wishlist is empty'
            }
        }
    }
)
}



//get all job from db
const getjobs=()=>{
   return db.Jobfeed.find().then(
       (result)=>{
        if(result){
            return{
                status:true,
                statusCode:200,
                jobfeed:result
               
            }
           
        }
       


        else{
            return{
                status:false,
                statusCode:404,
                message:'Jobs not found'
            }
        }

       } 
    )
}

  //to delete wishlist content
  deletewish=(id)=>{
    return db.Wishlist.deleteOne({id}).then(
        (result)=>{
            if(result){
                // return{
                //     status:true,
                //     statusCode:200,
                //     products:result,
                //     message:"products removed"  //here we need the content not message so we created a new variable products 
                // }

                return db.Wishlist.find().then(
                    (result)=>{
                        if(result){
                            return{
                                status:true,
                                statusCode:200,
                                job:result,
                                message:'Job applied successfully'   //here we need the content not message so we created a new variable products 
                            }
                        }
                        else{
                            return{
                                status: false,
                            statusCode: 404,
                            message:'product not found'
                            }
                        }
                    }
                )
                

            }
            else{
                return{
                    status: false,
                statusCode: 404,
                message:'Your wishlist is empty'
                }
            }
        }
    )
    
  }


//register
const register=(username,mail,password)=>{
return db.User.findOne({mail})
.then(user=>{
    if(user){
        return{
            status:'false',
            statusCode:400,
            message:'user already registered'
        }
    }
    else{
        const newUser=new db.User({
            username:username,
            mail:mail,
            password:password
        })  
         
                
        newUser.save();

        return {
            status:'true',
            statusCode:200,
            message:'Registered successfully'
        }
    }
})
}




module.exports={
   register,getjobs,addtowishlist,getwishlist,addtoapplied,getapplied,backtoapplied, deletewish
}

