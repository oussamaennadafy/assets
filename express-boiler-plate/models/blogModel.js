const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
 title: {
  type: String,
  required: [true, "please add a title"]
 },
 body: {
  type: String,
  required: [true, "please add a content"]
 },
 author: {
  type: String,
  required: [true, "who are you"]
 }
}, {
 timestamps: true
})


module.exports = mongoose.model('blog', blogSchema)