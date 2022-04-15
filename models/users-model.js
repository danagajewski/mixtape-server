import mongoose from 'mongoose';
import UsersSchema from "../schemas/users-schema.js";
const UserModel = mongoose.model('UserModel', UsersSchema);
export default UserModel;
