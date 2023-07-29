import { NotFoundError } from "../helpers/apiError";
import Users, { UserDocument } from "../models/Users";

export const createUser = (user: UserDocument): Promise<UserDocument> => {
  return user.save();
};

export const updateUserinformation = async (
  userId: string,
  newInformation: Partial<UserDocument>
): Promise<UserDocument> => {
  const foundedUser = await Users.findByIdAndUpdate(userId, newInformation, {
    new: true,
  });
  if (!foundedUser) {
    throw new NotFoundError(`user ${userId} not found`);
  }
  return foundedUser;
};

export const findUserByEmail = async (
  userEmail: string
): Promise<UserDocument> => {
  const foundUser = await Users.findOne({ email: userEmail });
  if (!foundUser) {
    throw new NotFoundError(`user ${userEmail} not found`);
  }
  return foundUser;
};
