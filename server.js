import express from 'express';
import cors from 'cors';
import userController from "./controllers/user-controller.js";
import notesController from "./controllers/notes-controller.js";
import mongoose from "mongoose";
const CONNECTION_STRING = "mongodb+srv://dgajewski:dontstealmydata@mixtape.f3ojk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"//process.env.MIXTAPE_DB_CONNECTION_STRING
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors());
app.use(express.json());
userController(app);
notesController(app);
app.get('/', (req, res) => {res.send('ACCESS BLOCKED')})
app.listen(process.env.PORT || 4000);