import UserModel from '../models/users-model.js';
export const findAllUsers = () => UserModel.find();
export const createUser = (user) => UserModel.create(user);
export const deleteUser = (uid) => UserModel.deleteOne({_id: uid});
export const updateUser = (uid, user) => UserModel.updateOne({_id: uid}, {$set: user})