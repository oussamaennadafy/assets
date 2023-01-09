const express = require('express')
const { getBlogs, addBlog, getBlog, deleteBlog } = require('../controllers/blogController')
const router = express.Router()



router.route('/').get(getBlogs).post(addBlog)

router.route('/:id').get(getBlog).delete(deleteBlog)


module.exports = router