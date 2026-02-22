import { Schema, model } from "mongoose";

const LoginLogSchema = new Schema(
  {
    userEmail: { type: String, required: true },
    action: { type: String, default: "login" },
  },
  { timestamps: true }
);

export default model("LoginLog", LoginLogSchema);