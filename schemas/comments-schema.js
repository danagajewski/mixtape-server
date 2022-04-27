const mongoose = require('mongoose')

const commentsSchema = mongoose.Schema({
  comment: String,
  songId: String,
  commenterUsername: String,
  commenter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel'}
}, {collection: 'comments'})

module.exports = commentsSchema