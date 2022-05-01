import * as userDao from '../daos/users-dao.js'

const findUserById = async (req, res) => {
  const userId = req.params.uid;
  const user = await userDao.findUserById(userId)
  res.json(user);
}

const findAllUsers = async (req, res) => {
  const users = await userDao.findAllUsers()
  res.json(users);
}

const createUser = async (req, res) => {
  const newUser = req.body;
  newUser.token = null;
  newUser.refresh_token = null;
  newUser.profile_pic = null;
  const insertedUser = await userDao.createUser(newUser);
  res.json(insertedUser);
}

const deleteUser = async (req, res) => {
  const toDelete = req.params.uid;
  const status = await userDao.deleteUser(toDelete);
  res.json(status);
}

const updateMyUser = async (req, res) => {
  const userId = req.params['uid'];
  const updatedUser = req.body;
  const status = await userDao.updateUser(userId, updatedUser);
  const users = await userDao.findAllUsers()
  req.session['currentUser'] = users.find(u => u._id == userId)
  res.json(status);
}

const updateUser = async (req, res) => {
  const userId = req.params['uid'];
  const updatedUser = req.body;
  const status = await userDao.updateUser(userId, updatedUser);
  res.json(status);
}

const signup = async (req, res) => {
  const newUser = req.body
  newUser.token = null;
  newUser.refresh_token = null;
  newUser.profile_pic = null;
  newUser.admin = false;
  const existingUser = await userDao.findUserByUsername(newUser.username)
  if (existingUser) {
    res.sendStatus(403)
  } else {
    const actualUser = await userDao
    .createUser(newUser)
    req.session['currentUser'] = actualUser
    res.json(actualUser)
  }
}

const signin = async (req, res) => {
  const existingUser = await userDao
  .findUserByCredentials(req.body.username, req.body.password)
  if (existingUser) {
    req.session['currentUser'] = existingUser
    return res.send(existingUser)
  } else {
    return res.sendStatus(503)
  }
}

const profile = (req, res) => {
  const currentUser = req.session['currentUser']
  if (currentUser) {
    res.json(currentUser)
  } else {
    res.sendStatus(503)
  }
}

const signout = (req, res) => {
  req.session.destroy()
  res.sendStatus(200)
}

const findUserByCredentials = async (req, res) => {
  const crendentials = req.body
  const email = crendentials.email
  const password = crendentials.password
  const user = await userDao.findUserByCredentials(email, password)
  if (user) {
    res.sendStatus(200)
  } else {
    res.sendStatus(403)
  }
}

export default (app) => {
  app.post('/api/signup', signup);
  app.post('/api/signin', signin);
  app.post('/api/signout', signout);
  app.post('/api/profile', profile);

  app.get('/api/users/:uid', findUserById);
  app.get('/api/users', findAllUsers);
  app.post('/api/users/credentials', findUserByCredentials)
  app.post('/api/users', createUser);
  app.delete('/api/users/:uid', deleteUser);
  app.put('/api/users/:uid', updateMyUser);
  app.put('/api/users/my/:uid', updateUser);

}