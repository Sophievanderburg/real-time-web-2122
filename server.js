/* https://socket.io/get-started/chat */
const express = require('express')
const app = express()
const fetch = require('node-fetch')
const http = require('http').createServer(app)
const path = require('path')
const io = require('socket.io')(http)
const port = process.env.PORT || 4242

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(path.resolve('public')))

app.get("/", renderPagina)

function renderPagina (req, res){
  fetch(`https://opentdb.com/api.php?amount=10&category=12&difficulty=easy`)
  .then(function(response){
    return response.json()
  })
  .then((jsonData) =>{
    res.render('index', {
      data: jsonData.results
    })
  })
  .catch((err)=>{
    res.render('error', {
      pageTitle: "Error"
    })
  })
}







io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('message', (message) => {
    io.emit('message', message)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

http.listen(port, () => {
  console.log('listening on port ', port)
})


/*naam meegeven*/
let users = []
