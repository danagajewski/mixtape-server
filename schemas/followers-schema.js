import mongoose from 'mongoose';
const FollowersSchema = mongoose.Schema({
  follower: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  followed: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
}, {collection: 'followers'});
export default FollowersSchema;