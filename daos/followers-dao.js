import FollowersModel from '../models/followers-model.js';
export const findAllFollowers = (profileId) => FollowersModel.find({$or: [{followed: profileId}, {follower: profileId}]});
export const follow = (follow) => FollowersModel.create(follow);
export const unfollow = (follow) => FollowersModel.deleteOne({follower: follow.follower, followed: follow.followed});