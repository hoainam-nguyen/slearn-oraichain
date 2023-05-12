const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// Define app
const app =  express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  User
const userRoute = require('./src/routes/userRoute')
app.use('/user', userRoute)


// Forum
const forumRoute = require('./src/routes/forumRoute')
app.use('/forum', forumRoute)


// Bot
const botRoute = require('./src/routes/botRoute')
app.use('/bot', botRoute)

// Run app
const PORT=8010
app.listen(PORT, () => {
    console.log("[INFO] Server running at port", PORT)
})