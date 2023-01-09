const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const errorHandler = require('./middlewares/errorMiddleware')
const cors = require('cors')
const app = express()


const corsOption = {
 origin: ['http://localhost:3000']
}

connectDB()


app.use(cors(corsOption))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/blogs', require('./routes/blogRoutes'))


app.use(errorHandler)



app.listen(port, () => console.log(`server running on port ${port} ...`))