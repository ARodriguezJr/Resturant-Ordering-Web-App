var express = require('express')
var fs = require('fs')
var https = require('https')
var path = require('path')
//var io = require('socket.io')(https);
var router = express.Router();
let app = express()

//var post = require('./js/post.js')


const pug = require('pug');

app.use("/js", express.static(__dirname + "/js"));
app.use("/node_modules", express.static(__dirname + "/js"));
app.use("/static", express.static(__dirname + "/static"));

app.set("view engine", "pug");

//app.use(express.static(__dirname + '/static'));
//app.set("views", path.join(__dirname, "views"));
//app.use(express.static((__dirname, 'public')));

/*app.get('/', function (req, res) {
  res.render("index.html", {title: "Home"});
})
*/
/*io.on('connection', function(socket){
  console.log('a user connected');
});*/

app.get('/', function (req, res) {
  res.render('homepage', {title: 'Homepage'});
});

router.get("/", (req, res) => {
  res.render("homepage");
});

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(3000, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})

