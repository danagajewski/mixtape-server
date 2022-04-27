const commentModel = require('../models/comments-model')

const postComment = async (commenterId, songId, comment) => {
  // ^should commenterId reference the user schema?
  comment.commenter = commenterId
  comment.songId = songId
  const actualComment = await commentModel.create(comment)
  return actualComment
}

const findCommentsByImdbID = (songId) =>
    commentModel.find({songId})

const findCommentsByUserId = (userId) =>
    commentModel.find({commenter: userId})

module.exports = {
  postComment, findCommentsByImdbID, findCommentsByUserId
}