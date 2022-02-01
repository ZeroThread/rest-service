import { DocumentDefinition } from 'mongoose';
import User, { UserDocument } from '../models/user.model';
import logger from '../utils/logger';

export const createUserService = async (
  input: DocumentDefinition<
    Omit<UserDocument, 'createdAt' | 'updatedAt' | 'comparePassword'>
  >
) => {
  try {
    return await User.create(input);
  } catch (error: any) {
    logger.error(error);
    throw new Error(error.message);
  }
};
