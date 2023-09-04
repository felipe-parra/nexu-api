import { Schema, model } from "mongoose";

const modelSchema = new Schema(
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
    brand: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
    },
  },
  {
    timestamps: true,
  }
);

export default model("Model", modelSchema);
