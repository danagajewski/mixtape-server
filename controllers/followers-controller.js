import * as followersDao from "../daos/followers-dao.js"

const follow = async (req, res) => {
  const follower = req.body.follower;
  const followed = req.body.followed;
  const follow = {follower: follower, followed: followed}
  const insertedNote = await followersDao.follow(follow);
  res.json(insertedNote);
}
const findAllFollowers = async (req, res) => {
  const profileId = req.params.pid;
  const follows = await followersDao.findAllFollowers(profileId)
  res.json(follows);
}

const findFollow = async (req, res) => {
  const followerId = req.params.followerId;
  const followedId = req.params.followedId;
  const follow = await followersDao.findFollow(followerId, followedId)
  res.json(follow);
}



const unfollow = async (req, res) => {
  console.log(req.body)
  const follower = req.body.follower;
  const followed = req.body.followed;
  const follow = {follower: follower, followed: followed}
  const status = await followersDao.unfollow(follow);
  res.json(status);
}

export default (app) => {
  app.post('/api/followers', follow);
  app.get('/api/followers/:pid', findAllFollowers);
  app.get('/api/followers/:followerId/:followedId', findFollow);
  app.post('/api/followers/unfollow', unfollow);
}