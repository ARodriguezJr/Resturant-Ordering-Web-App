const querystring = require('querystring');
const https = require('https');

export function testPost() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        allText =  xhttp.responseText;
      }
      else
        document.write("error getting thingy");
    };
    xhttp.open("GET", "http://localhost:8080/spoons.txt", true);
    xhttp.send(); 
}