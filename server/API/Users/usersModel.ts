import { Schema, model } from "mongoose";

export const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  userName: { type: String, required: true, unique: true },
  name: { type: String, required: true},
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const UserModel = model("users", UserSchema);
export default UserModel;