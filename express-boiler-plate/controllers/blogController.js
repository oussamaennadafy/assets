const asyncHandler = require('express-async-handler')
const Blog = require('../models/blogModel')
// get blogs 
const getBlogs = asyncHandler(async function (req, res)
{
 const blogs = await Blog.find()
 res.json(blogs)
})

// get blogs 
const addBlog = asyncHandler(async function (req, res)
{
 if (!req.body.title || !req.body.body || !req.body.author) {
  res.status(200)
  throw new Error('please fill all inputes')
 }
 const blog = req.body

 const newBlog = await Blog.create(blog)
 res.status(200).json(newBlog)

})

// get blogs 
const getBlog = asyncHandler(async function (req, res)
{
 if (!req.params.id) throw new Error('please specify the id of blog')
 try {
  const blog = await Blog.findById(req.params.id)
  res.json(blog)
 } catch (e) {
  res.json(null)
 }
})

// get blogs 
const deleteBlog = asyncHandler(async function (req, res)
{
 if (!req.params.id) res.status(400).json("id is required")
 const blog = await Blog.findByIdAndDelete(req.params.id)
 blog ? res.status(200).json('blog deleted') : res.status(400).json('somthing happend!')
})


module.exports = {
 getBlogs,
 addBlog,
 getBlog,
 deleteBlog
}