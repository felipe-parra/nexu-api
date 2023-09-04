import mongoose from "mongoose";

/**
 * Validate if _id is a valid ObjectId
 * @param {string} _id
 * @returns {boolean}
 */
export const isValidObjectId = (_id: string): boolean => {
  return mongoose.Types.ObjectId.isValid(_id);
};
