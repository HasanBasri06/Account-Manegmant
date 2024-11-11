require('dotenv').config()

const express = require('express')
const userRouter = require('./routes/userRoutes')
const app = express()
const port = process.env.PORT ||  '3000'
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use('/users', userRouter)

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`);
})