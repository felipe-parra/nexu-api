import { Schema, model } from "mongoose";

const brandSchema = new Schema(
  {
    id: Number,
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    average_price: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Brand", brandSchema);
