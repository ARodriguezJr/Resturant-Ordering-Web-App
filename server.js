var express = require('express')
var fs = require('fs')
var https = require('https')
var path = require('path')
//var io = require('socket.io')(https);
var router = express.Router();
var cors = require('cors')
let app = express()

app.use(cors())

//var post = require('./js/post.js')

/*app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 }); */

const pug = require('pug');

var indexManager = require("./managers/index");
var catalogManager = require("./managers/catalog");
var accountManager = require("./managers/account");
var aboutManager = require("./managers/about");
var offersManager = require("./managers/offers");
var reviewsManager = require("./managers/reviews");
var careersManager = require("./managers/careers");
var contactManager = require("./managers/contact");
var helpManager = require("./managers/help");


app.use("/js", express.static(__dirname + "/js"));
app.use("/node_modules", express.static(__dirname + "/js"));
app.use("/public", express.static(__dirname + "/public"));
app.use("/views", express.static(__dirname + "/views"));

app.use("/", indexManager);
app.use("/catalog", catalogManager);
app.use("/account", accountManager);
app.use("/about", aboutManager);
app.use("/offers", offersManager);
app.use("/reviews", reviewsManager);
app.use("/careers", careersManager);
app.use("/contact", contactManager);
app.use("/help", helpManager);

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
  res.render('siteroot/index', {title: 'Homepage'});
}); 

/*router.get("/", (req, res) => {
  res.render("homepage");
}); */

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(3000, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})

