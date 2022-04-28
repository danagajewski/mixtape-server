import UserModel from '../models/users-model.js';

export const findUserByCredentials = (username, password) => {return UserModel.findOne({username: username, password: password})}
export const findUserByUsername = username => {return UserModel.findOne({username})}
export const findUserById = id => {return UserModel.findById(id,{username:1, profile_pic:1})}
export const findAllUsers = () => {return UserModel.find()};
export const createUser = (user) => {return UserModel.create(user)};
export const deleteUser = (uid) => { return UserModel.deleteOne({_id: uid})};
export const updateUser = (id, updatedUser) => {
  return UserModel.updateOne(
      {_id: id},
      {$set: updatedUser}
  )
}