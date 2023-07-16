import { Request,Response,NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

import users from '../models/Users'
import { createUser,   findUserByEmail,   updateUserinformation } from '../services/users'



export const creatUserInformation = async(req:Request,res:Response, next:NextFunction)=>{
 try {
    const {email, password}=req.body
    const userInformation= new users({
          email,
          password
    })
    const userInfo =await createUser(userInformation)
    res.status(200).json(userInfo)
 } catch (error) {
    res.status(500)
    next(error)
 }
}
export const updateUserInfo=async(req:Request,res:Response, next:NextFunction)=>{
    try {
        const userId=req.params.id
        const userinfo=req.body
        const newUser=await updateUserinformation(userId,userinfo)
        res.status(200).json(newUser)
    } catch (error) {
        
    }
}
dotenv.config()
const JWT_SECRET=process.env.JWT_SECRET as string
export const loginUser=async(req:Request, res:Response, next:NextFunction)=>{

   try {
     const userData = await findUserByEmail(req.body.email);
     if(!userData){
        res.status(401).json({message:'wrong credentials'})
        return
     }
     const token= jwt.sign(
        {
            email:userData.email,
            _id:userData._id
        },
        JWT_SECRET,
        {expiresIn:'1hr'}

     )
      res.json({ userData, token });
    
   } catch (error) {
    next(error)
    
   }
  

}

