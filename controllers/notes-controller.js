import posts from "./notes.js";
let notes = posts;

const createNote = (req, res) => {
  const user = "Dana Gajewski";
  const newNote = req.body;
  newNote._id = (new Date()).getTime() + '';
  newNote.postedBy = {username: user};
  newNote.likes = 0;
  newNote.comments = 0;
  newNote.retuits = 0;
  newNote.dislikes = 0;
  newNote.handle = "DanaGajewski"
  newNote.time = new Date();
  newNote.avatar_image= "https://s3.amazonaws.com/images.berecruited.com/photos/athletes/dashboard/3817216.png?1494963118"

  notes.push(newNote);
  res.json(newNote);
}
const findAllNotes = (req, res) => {
  res.json(notes);
}
const updateNote = (req, res) => {
  const noteId = req.params['nid']
  const updatedNote = req.body;
  notes = notes.map(note => note._id === noteId ?
                            updatedNote :
                            note)
  res.json(notes);
}
const deleteNote = (req, res) => {
  const noteId = req.params['nid']
  notes = notes.filter(note => note._id !== noteId);
  res.json(notes);
}

export default (app) => {
  app.post('/api/notes', createNote);
  app.get('/api/notes', findAllNotes);
  app.put('/api/notes/:nid', updateNote);
  app.delete('/api/notes/:nid', deleteNote);
}