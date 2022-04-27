const mongoose = require('mongoose')
const commentsSchema = require('../schemas/comments-schema.js')
const commentsModel = mongoose.model(
    'CommentsModel',
    commentsSchema
)

module.exports = commentsModel