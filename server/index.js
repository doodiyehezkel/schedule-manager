const express = require('express')
const cookieParser = require('cookie-parser')

const authRoute = require('./routes/authRoute')

const mongoose = require('mongoose')

const PORT = 3001
const DBURI = 'mongodb+srv://davidaric:Qwer1234!@cluster0.rjdy8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(authRoute)

mongoose.connect(DBURI, (error) => {
    if (error) console.log(error);
    else app.listen(PORT, () => console.log(`server start on port ${PORT}`))
})
