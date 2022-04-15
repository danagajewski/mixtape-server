import mongoose from 'mongoose';
import NotesSchema from '../schemas/notes-schema.js'
const NotesModel = mongoose
.model('NotesModel', NotesSchema);
export default NotesModel;
