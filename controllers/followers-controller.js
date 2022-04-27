import * as followersDao from "../daos/followers-dao.js"

const follow = async (req, res) => {
  const follower = req.body.follower;
  const followed = req.body.followed;
  const follow = {follower: follower, followed: followed}
  const insertedNote = await followersDao.follow(follow);
  res.json(insertedNote);
}
const findAllFollowers = async (req, res) => {
  const follows = await followersDao.findAllFollowers()
  res.json(follows);
}

const unfollow = async (req, res) => {
  const follower = req.body.follower;
  const followed = req.body.followed;
  const follow = {follower: follower, followed: followed}
  const status = await followersDao.unfollow(follow);
  res.json(status);
}

export default (app) => {
  app.post('/api/followers', follow);
  app.get('/api/followers', findAllFollowers);
  app.delete('/api/followers', unfollow);
}