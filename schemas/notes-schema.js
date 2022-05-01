import mongoose from 'mongoose';
const NotesSchema = mongoose.Schema({
  username: String,
  tuit: String,
  likes: Number,
  dislikes: Number,
  comments: Number,
  retuits: Number,
  time: Date,
  songId: String,
  profilePicture: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel'}
}, {collection: 'notes'});
export default NotesSchema;