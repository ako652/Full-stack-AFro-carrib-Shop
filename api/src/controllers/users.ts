
import { Request,Response,NextFunction } from 'express'
import users from '../models/Users'
import { createUser, updateUserinformation } from '../services/users'


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