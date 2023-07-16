import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import dotenv from 'dotenv'
import { findUserByEmail } from "../services/users";

dotenv.config()
const JWT_SECRET=process.env.JWT_SECRET


const jwtStrategy=new JwtStrategy(
    {secretOrKey:JWT_SECRET,
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async(payload,done)=>{
        const userEmail=payload.email
        const foundUser= await findUserByEmail(userEmail)
        done(null,foundUser)

    }
)