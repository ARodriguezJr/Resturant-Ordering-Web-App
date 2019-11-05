// JS file to help laod dynamic info form backend for catalog

function loadItems(){
    var xhttp = new XMLHttpRequest();

    var itemArray = [];

    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var itemRaw = this.responseText;      // Raw text file data
      var dollarIndex = itemRaw.indexOf("$");
      var itemName = itemRaw.slice(0, dollarIndex);
      var itemPrice = itemRaw.slice(dollarIndex);
      
      document.getElementById("demo").innerHTML = itemName;

      var itemCard = document.createElement("div");
      itemCard.className = "item-tile";
      // Add attributes and html to card 
      itemCard.innerText = "CARD";
      // append to list
      document.body.appendChild(itemCard); // Maybe use a different append fucntion here
      /*var item = {
        name: itemName,
        price: itemPrice
      }*/

      //itemArray.push(item);
    }
  };
  xhttp.open("GET", "https://localhost:8080/static/Knives.txt", true);
  xhttp.send();
}