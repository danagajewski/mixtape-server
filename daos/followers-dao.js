import FollowersModel from '../models/followers-model.js';
export const findFollowers = (profileId) => FollowersModel.find({$or: [{followed: profileId}, {follower: profileId}]});
export const findAllFollowers = () => FollowersModel.find();
export const findFollow = (followerId, followedId) => FollowersModel.find({followed: followedId, follower: followerId});
export const follow = (follow) => FollowersModel.create(follow);
export const unfollow = (follow) => FollowersModel.deleteMany({follower: follow.follower, followed: follow.followed});