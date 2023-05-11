const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const userRoute = require('./src/routes/userRoute')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/user', userRoute)


// app.use('/', async(req, res, next) =>
// {
//   //  await example()

//    res.send("Thái")
// })

app.listen(3001, () => {
    console.log("hello")
})