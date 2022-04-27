import * as notesDao from "../daos/notes-dao.js";

const createNote = async (req, res) => {
  const user = req.body.user;
  const newNote = req.body;
  console.log(req)
  newNote.postedBy = {username: user};
  newNote.likes = 0;
  newNote.comments = 0;
  newNote.retuits = 0;
  newNote.dislikes = 0;
  newNote.userAvatar = req.body.profilePicture
  newNote.time = new Date();


  const insertedNote = await notesDao.createNote(newNote);
  res.json(insertedNote);
}
const findAllNotes = async (req, res) => {
  const notes = await notesDao.findAllNotes()
  res.json(notes);
}
const updateNote = async (req, res) => {
  const noteId = req.params['nid']
  const updatedNote = req.body;
  const status = await notesDao.updateNote(noteId, updatedNote);
  res.json(status);
}
const deleteNote = async (req, res) => {
  const noteId = req.params['nid']
  const status = await notesDao.deleteNote(noteId);
  res.json(status);
}

export default (app) => {
  app.post('/api/notes', createNote);
  app.get('/api/notes', findAllNotes);
  app.put('/api/notes/:nid', updateNote);
  app.delete('/api/notes/:nid', deleteNote);
}