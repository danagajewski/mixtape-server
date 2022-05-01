import mongoose from 'mongoose';
const UsersSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  token: String,
  refresh_token: String,
  profile_pic: String,
  admin: Boolean,
  verified: Boolean
}, {collection: 'users'});
export default UsersSchema;