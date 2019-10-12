//const querystring = require('querystring');
//const https = require('https');

//let val = testPost;

function testPrint(){
  document.write("Test PRINTING");
}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "/static/knife.txt", true);
  xhttp.send();
}

  /*var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://localhost:8080/spoons.txt");
oReq.send();
  */

/*var postData = querystring.stringify({
    'msg' : 'Hello World!'
});

var options = {
  hostname: 'google.com',
  port: 443,
  path: '/',
  method: 'POST',
  headers: {
       'Content-Type': 'application/x-www-form-urlencoded',
       'Content-Length': postData.length
     }
};

var req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});

req.write(postData);
req.end(); */