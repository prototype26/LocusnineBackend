const User = require('../../model/userModel/userModel');
    exports.getAllUsers = async(req, res)=>{
    //code getAllUsers 
    try{   
        const users = await User.find();
        console.log(users);
        res.status(200).json({
           status:'success',
           results:users.length,
           users:users
       });
        }catch(error){
            res.status(404).json({
                status:'fail',
                message:err
            });
        }  
   }

   exports.createUser = async(req,res)=>{
    //create user code 
    try{
    const newUser = await User.create(req.body);      
    res.status(201).json({
       status:'success',
       message:'User created',
       data : {
           user: newUser
       }
    });
    }catch(error){
        res.status(400).json({
            status:'fail',
            message:error
        })
    }
   }

   exports.getUser = async(req,res)=>{
    //get user code
    try{
    console.log(req.params.email);
    const user = await User.findOne({email:req.params.email})
    console.log(`user::${user}`);
    res.status(200).json({
        status:'success',
        message:'User found',
        data:{
            user:user
        }
    });
    }catch(error){
        res.status(404).json({
            status:'fail',
            message:error
        });
    }
   }

   exports.updateUser = async(req,res)=>{
    //update user code
    try{
        await User.findOneAndUpdate({email:req.params.email},req.body)
        res.status(201).json({
        status:'success',
        message:'User updated',
     });
    }catch(error){
        res.status(404).json({
            status:'fail',
            message:error
        });
    }
   }

   exports.deleteUser = async(req,res)=>{
    try{
       console.log(req.params.email);
       await User.findOneAndDelete({email:req.params.email})
       res.status(204).json({
            status:'success',
            message:'User found',
            data:{
                user:null
            }
        });
        }catch(error){ 
            res.status(404).json({
                status:'fail',
                message:error
            });
        }   
   }





