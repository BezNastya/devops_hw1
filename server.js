const express = require('express')
// const ReceiverInf = require('./model')
// const nodemailer = require('nodemailer')

const server = express()
server.listen(8080)

const bodyParser = require('body-parser')
const path = require('path')
server.use(bodyParser.json())
server.use(express.urlencoded())

server.use(express.static(__dirname))

server.get('/home', function (req, res) {
  res.render(path.join(__dirname, '/views/home.twig'))
})

server.get('/', function (req, res) {
  res.redirect('/home')
})

server.get('/receivers', function (req, res) {
  // ReceiverInf.findAll(function (err, dbR){
  //   if (err) {
  //     console.log(err)
  //     res.send('Error occurred during getting all receivers')
  //   } else {
  //     console.log(dbR)
  res.render(path.join(__dirname, '/views/receivers.twig'), { receivers: [] })
  //   }
  // })
})

// server.get('/receivers/delete/:id', function (req, res){
//   ReceiverInf.delete(req.params.id, function (err, id){
//     if (err) {
//       console.log(err)
//       res.render(__dirname + '/views/error.twig')
//     } else {
//       res.render(__dirname + '/views/success.twig',)
//     }
//   })
// })
//
// server.post('/receivers/update/:id', function (req, res){
//   ReceiverInf.update(req.params.id, req.body.receiverInf,function (err, id){
//     if (err) {
//       console.log(err)
//       res.render(__dirname + '/views/error.twig')
//     } else {
//       res.render(__dirname + '/views/success.twig',)
//     }
//   })
// })
//
// server.get('/receivers/update/:id', function (req, res){
//   res.render(__dirname + '/views/edit.twig', {id: req.params.id})
// })

server.get('/receivers/create', function (req, res) {
  res.render(path.join(__dirname, '/views/create.twig'))
})

// server.post('/receivers/create', function (req, res){
//   ReceiverInf.create(req.body.receiverInf,function (err, id){
//     if (err) {
//       console.log(err)
//       res.render(__dirname + '/views/error.twig')
//     } else {
//       res.render(__dirname + '/views/success.twig',)
//     }
//   })
// })

// server.post('/spam', function (req, res) {
//   ReceiverInf.findAll(function (err, receivers){
//     receivers.forEach(function (receiver){
//       let i = parseInt(req.body.mess)
//       sendEmail(receiver.email, messages.messages[i])
//     })
//   })
//   res.render(__dirname + '/views/success.twig',)
// })

// server.post('/spamOwn', function (req, res) {
//   ReceiverInf.findAll(function (err, receivers){
//     receivers.forEach(function (receiver){
//       sendEmail(receiver.email, req.body.mess)
//     })
//   })
//   res.render(__dirname + '/views/success.twig',)
// })

const messages = {
  messages: [
    'Hello from Spammer App!',
    'It is a spam. How are you doing?',
    'This is testing of new Spammer App!',
    'New version of app is available to you!',
    'Today is a good day',
    'What are your plans for tomorrow?',
    'Happy New Year!',
    'Happy Valentines Day!',
    'Merry Christmas!',
    'Happy Easter!'
  ]
}

server.get('/send', function (req, res) {
  res.render(__dirname, '/views/send.twig', messages)
})

server.get('/sendOwn', function (req, res) {
  res.render(path.join(__dirname, '/views/sendOwn.twig'))
})

// async function sendEmail (email, message) {
//   const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     auth: {
//       user: 'testspamweb@gmail.com',
//       pass: 'Qwerty1234%'
//     }
//   })
//
//   const result = await transporter.sendMail({
//     from: 'testspamweb@gmail.com',
//     to: email,
//     subject: 'Message from Spam App',
//     text: message
//
//   })
//   console.log(result)
// }
