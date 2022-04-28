import mongoose from 'mongoose';
const NotesSchema = mongoose.Schema({
  postedBy: {username: String, profilePicture : String},
  tuit: String,
  likes: Number,
  dislikes: Number,
  comments: Number,
  retuits: Number,
  time: String,
  songId: String,
  userName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel'}
}, {collection: 'notes'});
export default NotesSchema;