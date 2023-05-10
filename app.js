const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Eueno = require('@eueno/lib-node');
const fs = require('fs')

const userRoute = require('./src/routes/userRoute')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/user', userRoute)

// async function example() {
//   const eueno = new Eueno({
//     endpoint: 'https://v2-developers.eueno.io',
//   });

  // data = await eueno.createAccount(
  //   {
  //     account: '0x1a8436fbac6824696d161574e621fd3c9626fb9f',
  //     projectKey: 'fded7403417d9a370e9067e9e4ece3a5f4f08b2674b0abdaa86ee2b0a7a3372a',
  //   },
  // );
  // let data = await eueno.createFolder(
  //   {
  //     projectId: 238,
  //     path: 'user',
  //     projectKey: 'fded7403417d9a370e9067e9e4ece3a5f4f08b2674b0abdaa86ee2b0a7a3372a',
  //   },
  // );
  // console.log(data)
  // console.log(data)
  // const file = await fs.readFileSync('phông mentoring_day.png');

  // const data = await eueno.upload(
  //   file,
  //   {
  //     projectKey: 'fded7403417d9a370e9067e9e4ece3a5f4f08b2674b0abdaa86ee2b0a7a3372a',
  //     key: {
  //       walletPublicKey: '0437ff3bce63d7161b7eab0cbc43f84823d7d82af05363c2f6fc11969f9696f35522311a6b2255c871d933a64733d16be384f0c0872341db00af225845b4b506f3',
  //       fileEncryptionKey: 'm-8IhUkIzBC_1X-UnOppgpIjZTlJVyP9mY_l9m8iyfo'
  //     },
  //   },
  //   {
  //     projectId: 238,
  //     filename: '1.png',
  //     contentLength: 12313,
  //     contentType: 'image/png',
  //     method: 'ENCRYPT',
  //     keepPath: false,
  //   },
  // );
// }


app.use('/', async(req, res, next) =>
{
  //  await example()

   res.send("Thái")
})

app.listen(3000, () => {
    console.log("hello")
})