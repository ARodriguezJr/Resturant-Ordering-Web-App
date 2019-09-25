var express = require('express')
var fs = require('fs')
var https = require('https')
var app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

// key: fs.readFileSync('server.key') == 
https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)

// allows us to remember which localhost to navigate too 
.listen(3000, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})
