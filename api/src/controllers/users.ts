import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

import users from "../models/Users";
import {
  createUser,
  findUserByEmail,
  updateUserinformation,
} from "../services/users";
import { BadRequestError } from "../helpers/apiError";

export const creatUserInformation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const userInformation = new users({
      email,
      password: hashedPassword,
    });
    const userInfo = await createUser(userInformation);
    res.status(200).json(userInfo);
  } catch (error) {
    res.status(500);
    next(error);
  }
};
export const updateUserInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.userId;
    const userinfo = req.body;
    const newUser = await updateUserinformation(userId, userinfo);
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;
export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const userData = await findUserByEmail(email);
    if (!userData) {
      res.status(401).json({ message: "wrong credentials" });
      return;
    }
    const match = await bcrypt.compare(userData.password, password);
    if (match) {
      throw new BadRequestError("password doesnt match!");
    }
    const token = jwt.sign(
      {
        email: userData.email,
        _id: userData._id,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ userData, token });
  } catch (error) {
    next(error);
  }
};
