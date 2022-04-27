import FollowersModel from '../models/followers-model.js';
export const findAllFollowers = () => FollowersModel.find();
export const follow = (follow) => FollowersModel.create(follow);
export const unfollow = (follow) => FollowersModel.deleteOne({follower: follow.follower, followed: follow.followed});