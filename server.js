import express from 'express';
import cors from 'cors';
import userController from "./controllers/user-controller.js";
import notesController from "./controllers/notes-controller.js";
const app = express();
app.use(cors());
app.use(express.json());
userController(app);
notesController(app);
app.get('/', (req, res) => {res.send('ACCESS BLOCKED')})
app.listen(process.env.PORT || 4000);