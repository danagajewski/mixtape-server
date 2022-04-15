import * as userDao from '../daos/users-dao.js'



const findAllUsers = async (req, res) => {
  const users = await userDao.findAllUsers()
  res.json(users);
}

const findUserById = async (req, res) => {
  const userId = req.params['nid']
  const users = await userDao.findAllUsers()
  const user = users.find(u => u._id === userId);
  res.json(user);
}

const createUser = async (req, res) => {
  const newUser = req.body;
  newUser._id = (new Date()).getTime() + '';
  newUser.username = "new user";
  newUser.password = "";
  newUser.email = null;
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

const updateUser = async (req, res) => {
  const userId = req.params['uid'];
  const updatedUser = req.body;
  const status = await userDao.updateUser(userId, updatedUser);
  res.json(status);
}


export default (app) => {
  app.get('/api/users', findAllUsers);
  app.get('/api/users/:uid', findUserById);
  app.post('/api/users', createUser);
  app.delete('/api/users/:uid', deleteUser);
  app.put('/api/users/:uid', updateUser);

}