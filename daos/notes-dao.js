import NotesModel from '../models/notes-model.js';
export const findAllNotes = () => NotesModel.find();
export const createNote = (note) => NotesModel.create(note);
export const deleteNote = (nid) => NotesModel.deleteOne({_id: nid});
export const updateNote = (nid, note) => NotesModel.updateOne({_id: nid}, {$set: note})