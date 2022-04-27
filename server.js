import express from 'express';
import session from 'express-session';
import cors from 'cors';
import userController from "./controllers/user-controller.js";
import notesController from "./controllers/notes-controller.js";
import spotifyControllerNew from "./controllers/spotify-controller-new.js";
import mongoose from "mongoose";
import followersController from "./controllers/followers-controller.js";
const CONNECTION_STRING = "mongodb+srv://dgajewski:dontstealmydata@mixtape.f3ojk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";//process.env.MIXTAPE_DB_CONNECTION_STRING;
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors({credentials: true,
  origin: 'http://localhost:3000'
}));
app.use(express.json());
const sess = {
  secret: 'keyboard cat', // TODO: move this to environment variable
  cookie: {}
}
if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}
app.use(session(sess))
userController(app);
notesController(app);
spotifyControllerNew(app);
followersController(app);
app.get('/', (req, res) => {res.send('ACCESS BLOCKED')})
app.listen(process.env.PORT || 4000);