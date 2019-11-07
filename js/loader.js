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
      var itemGrid = document.getElementById("item-grid");
      var itemCard = document.createElement("div");
      itemCard.className = "item-tile";
      itemCard.innerHTML = "<div class='item-tile-photo'>" + "<img src='/public/plates.jpg'/>" +  "</div><div class='item-tile-description'>" + "<h1>" + itemName + "</h1><p>" + itemPrice + "</p></div>";
      //itemCard.innerHTML = <div class="item-tile-photo"><img src="icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"/></div><div class="item-tile-description"><h1>White Ceramic</h1><p>Beautiful ceramic plates useful for any occaison </p></div>;

      /*itemCard.innerHTML = 
      "<div class="item-tile">" +
      "<div class="item-tile-photo">" +
      "<img src="icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"/>" +
      "</div><div class="item-tile-description">" +
      "<h1>White Ceramic</h1>" +
      "<p>Beautiful ceramic plates useful for any occaison </p>";*/
      
      /*** WORKING CODE UNDER HERE
      itemCard.className = "item-tile";
      // Add attributes and html to card 
      itemCard.innerText = "CARD";
      // append to list
      document.body.appendChild(itemCard); // Maybe use a different append fucntion here
      WORKING CODE ABOVE HERE
      */ 
      /*var item = {
        name: itemName,
        price: itemPrice
      }*/
      itemGrid.appendChild(itemCard); // Maybe use a different append fucntion here
      //itemArray.push(item);
    }
  };
  xhttp.open("GET", "https://localhost:8080/static/Knives.txt", true);
  xhttp.send();
}