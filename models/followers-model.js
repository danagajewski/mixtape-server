import mongoose from 'mongoose';
import FollowersSchema from '../schemas/followers-schema.js'
const FollowersModel = mongoose
.model('FollowersModel', FollowersSchema);
export default FollowersModel;
