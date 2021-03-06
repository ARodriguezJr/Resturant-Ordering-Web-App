// JS file to help laod dynamic info form backend for catalog

function loadItems(){
  var url =  window.location.href;
  var xhttp = new XMLHttpRequest();
  var folder = "defualtfolder";

  if(url == "https://localhost:3000/catalog/dishes"){
    folder = "plates";
    var fileNames = ["ceramic", "dark_ceramic", "paper_bowls", "paper_plates"];
  }else if(url == "https://localhost:3000/catalog/silverware"){
    folder = "silverware";
    var fileNames = ["steel_forks", "steel_knives", "steel_spoons", "plastic_forks", "plastic_spoons", "plastic_knives"];
  }else if(url == "https://localhost:3000/catalog/disposables"){
    folder = "disposables";
    var fileNames = ["gloves", "trashbags", "clorox_spray", "paper_towels"];
  }else if(url == "https://localhost:3000/catalog/office"){
    folder = "office";
    var fileNames = ["paper", "staples", "ballpoint_pens"];
  }else if(url == "https://localhost:3000/catalog/kitchen"){
    folder = "kitchen";
    var fileNames = ["sauce_pan", "sautee_pan", "strainer"];
  }else{
    var fileNames = ["failText.txt"]
  }

  fileNames.forEach(function(fileName){
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var itemRaw = this.responseText;      // Raw text file data
        var dollarIndex = itemRaw.indexOf("$");
        var hashIndex = itemRaw.indexOf("#");
        var itemName = itemRaw.slice(0, dollarIndex);
        var itemPrice = itemRaw.slice(dollarIndex, hashIndex);
          
        //document.getElementById("demo").innerHTML = itemName;
        var itemGrid = document.getElementById("item-grid");
        var itemCard = document.createElement("a");
        itemCard.setAttribute("href", "/catalog/" + fileName);
        itemCard.className = "item-tile";
        itemCard.innerHTML = "<div class='item-tile-photo'>" + "<img src='/public/" + fileName + ".jpg'/>" +  "</div><div class='item-tile-description'>" + "<h1>" + itemName + "</h1><p>" + itemPrice + "</p></div>";
          
        itemGrid.appendChild(itemCard); // Maybe use a different append function here
          // Scrapped array of items idea
      }
    };
      xhttp.open("GET", "https://localhost:8080/static/" + folder + "/" + fileName + ".txt", false);   //Might need " at end of fileName here
      xhttp.send();
  });
}


function loadListing(){
  var url =  window.location.href;
  var xhttp = new XMLHttpRequest();
  var folder = "defualtfolder";

  if(url == "https://localhost:3000/catalog/ceramic"){    // Checks URL to determine what item to display
    folder = "plates";
    var fileName = "ceramic";
  }else if(url == "https://localhost:3000/catalog/dark_ceramic"){
    folder = "plates";
    var fileName = "dark_ceramic";
  }else if(url == "https://localhost:3000/catalog/paper_plates"){
    folder = "plates";
    var fileName = "papeer_plates";
  }else if(url == "https://localhost:3000/catalog/paper_bowls"){
    folder = "plates";
    var fileName = "paper_bowls";
  }else if(url == "https://localhost:3000/catalog/steel_forks"){
    folder = "silverware";
    var fileName = "steel_forks";
  }else if(url == "https://localhost:3000/catalog/steel_knives"){
    folder = "silverware";
    var fileName = "steel_knives";
  }else if(url == "https://localhost:3000/catalog/steel_spoons"){
    folder = "silverware";
    var fileName = "steel_spoons";
  }else if(url == "https://localhost:3000/catalog/plastic_forks"){
    folder = "silverware";
    var fileName = "plastic_forks";
  }else if(url == "https://localhost:3000/catalog/plastic_spoons"){
    folder = "silverware";
    var fileName = "plastic_spoons";
  }else if(url == "https://localhost:3000/catalog/plastic_knives"){
    folder = "silverware";
    var fileName = "plastic_knives";
  }else if(url == "https://localhost:3000/catalog/gloves"){
    folder = "disposables";
    var fileName = "gloves";
  }else if(url == "https://localhost:3000/catalog/trashbags"){
    folder = "disposables";
    var fileName = "trashbags";
  }else if(url == "https://localhost:3000/catalog/clorox_spray"){
    folder = "disposables";
    var fileName = "clorox_spray";
  }else if(url == "https://localhost:3000/catalog/paper_towels"){
    folder = "disposables";
    var fileName = "paper_towels";
  }else if(url == "https://localhost:3000/catalog/paper"){
    folder = "office";
    var fileName = "paper";
  }else if(url == "https://localhost:3000/catalog/staples"){
    folder = "office";
    var fileName = "staples";
  }else if(url == "https://localhost:3000/catalog/ballpoint_pens"){
    folder = "office";
    var fileName = "ballpoint_pens";
  }else if(url == "https://localhost:3000/catalog/sauce_pan"){
    folder = "kitchen";
    var fileName = "sauce_pan";
  }else if(url == "https://localhost:3000/catalog/sautee_pan"){
    folder = "kitchen";
    var fileName = "sautee_pan";
  }else if(url == "https://localhost:3000/catalog/strainer"){
    folder = "kitchen";
    var fileName = "strainer";
  }else{
    var fileName = "failtextfile"
  }


  
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var itemRaw = this.responseText;      // Raw text file data
      var dollarIndex = itemRaw.indexOf("$");
      var hashIndex = itemRaw.indexOf("#");
      var itemName = itemRaw.slice(0, dollarIndex);
      var itemPrice = itemRaw.slice(dollarIndex, hashIndex);
      var itemDesc = itemRaw.slice(++hashIndex)
        
      //document.getElementById("demo").innerHTML = itemName;
      var itemListing = document.createElement("div");
      var container = document.getElementById("item-listing-container")
      itemListing.setAttribute("id", "item-listing");
      //itemCard.className = "item-tile";
      itemListing.innerHTML = "<div id='item-listing-photo'><img src='/public/" + fileName + ".jpg'/></div><div id='item-listing-info'><div id='item-listing-title'> <h1>" + itemName + "</h1></div><div id='item-listing-price'><h1>" + itemPrice + "</h1><div id='item-listing-description'><p>" + itemDesc + "</p></div><div id='item-listing-purchase'><div id='id-listing-price'></div><input type='text' id='orderQty' value='1'/><button onclick='submitQty()'>Order</button></div></div></div>";
        
      container.appendChild(itemListing); // Maybe use a different append fucntion here
        // Scrapped array of items idea
    }
  };
    xhttp.open("GET", "https://localhost:8080/static/" + folder + "/" + fileName + ".txt", true);   //Might need " at end of fileName here
    xhttp.send();
  
}


function loadAccount(){
  loadOrders();
  loadPreviousOrders();
}

function loadOrders(){
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var orderRaw = this.responseText;      // Raw text file data
      if (orderRaw == "" || orderRaw == " "){
        return;
      }

      var ordersParsed = orderRaw.split("\n");

      
      // Prepare to append orders to shopping list
      var orderList = document.getElementById("orders-body");

      for(p = 0; p < ordersParsed.length && ordersParsed[p] != ""; p++){
        // Parse each line of order for item info
        var singleItemOrder = ordersParsed[p].split(" ");
        console.log(singleItemOrder);
        var itemName = singleItemOrder[0];
        console.log(itemName);

        var underlineInd = itemName.search("_");
        if(underlineInd != -1){  // If name has _ in the name
          // Change first letters to uppercase and remove _
          var itemNameCap = itemName.charAt(0).toUpperCase() + itemName.slice(1, underlineInd) + " " + itemName.charAt(++underlineInd).toUpperCase() + itemName.slice(++underlineInd);
        }else{
          var itemNameCap = itemName.charAt(0).toUpperCase() + itemName.slice(1);
        }
        console.log("CAP: " + itemNameCap);

        var itemQuantity = singleItemOrder[1];
        var itemPrice = singleItemOrder[2];

        // Create new div for new order
        var itemOrder = document.createElement("div");
        itemOrder.setAttribute("class", "orders-single");
        itemOrder.innerHTML = "<div class='orders-item'><img class='orders-image' src=" + "/public/" + itemName + ".jpg" + "><h2>" + itemNameCap + "</h2></div><div class='orders-quantity'><p>Quantity: " + itemQuantity + "</p></div><div class='orders-price'><h2>$" + itemPrice * itemQuantity + "</h2></div>";
        
        orderList.appendChild(itemOrder); 
      }
    }
  };
    xhttp.open("GET", "https://localhost:8080/orders/" + "adminorders.txt", false);   //Might need " at end of fileName here
    xhttp.send();
} 

function loadPreviousOrders(){
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var orderRaw = this.responseText;      // Raw text file data
      if (orderRaw == "" || orderRaw == " "){
        return;
      }

      var ordersParsed = orderRaw.split("\n");

      
      // Prepare to append orders to shopping list
      var orderList = document.getElementById("previous-orders-body");

      for(p = 0; p < ordersParsed.length && ordersParsed[p] != ""; p++){
        // Parse each line of order for item info
        var singleItemOrder = ordersParsed[p].split(" ");
        console.log(singleItemOrder);
        var itemName = singleItemOrder[0];
        console.log(itemName);

        var underlineInd = itemName.search("_");
        if(underlineInd != -1){  // If name has _ in the name
          // Change first letters to uppercase and remove _
          var itemNameCap = itemName.charAt(0).toUpperCase() + itemName.slice(1, underlineInd) + " " + itemName.charAt(++underlineInd).toUpperCase() + itemName.slice(++underlineInd);
        }else{
          var itemNameCap = itemName.charAt(0).toUpperCase() + itemName.slice(1);
        }
        console.log("CAP: " + itemNameCap);

        var itemQuantity = singleItemOrder[1];
        var itemPrice = singleItemOrder[2];

        // Create new div for new order
        var itemOrder = document.createElement("div");
        itemOrder.setAttribute("class", "previous-orders-single");
        itemOrder.innerHTML = "<div class='previous-orders-item'><img class='previous-orders-image' src=" + "/public/" + itemName + ".jpg" + "><h2>" + itemNameCap + "</h2></div><div class='previous-orders-quantity'><p>Quantity: " + itemQuantity + "</p></div><div class='previous-orders-price'><h2>$" + itemPrice * itemQuantity + "</h2></div>";
        
        orderList.appendChild(itemOrder); 
      }
    }
  };
    xhttp.open("GET", "https://localhost:8080/submittedOrders/" + "finalAdminOrder.txt", false);   //Might need " at end of fileName here
    xhttp.send();
} 

