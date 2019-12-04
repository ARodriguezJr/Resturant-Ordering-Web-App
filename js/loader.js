// JS file to help laod dynamic info form backend for catalog

function loadItems(){
  var url =  window.location.href;
  var xhttp = new XMLHttpRequest();
  var folder = "defualtfolder";

  if(url == "https://localhost:3000/catalog/dishes"){
    folder = "plates";
    var fileNames = ["ceramic", "dark_ceramic"];
  }else if(url == "https://localhost:3000/catalog/silverware"){
    folder = "silverware";
    var fileNames = ["steel_forks", "steel_knives"];
  }else if(url == "https://localhost:3000/catalog/disposables"){
    folder = "disposables";
    var fileNames = ["gloves", "trashbags"];
  }else if(url == "https://localhost:3000/catalog/office"){
    folder = "office";
    var fileNames = ["paper", "staples"];
  }else if(url == "https://localhost:3000/catalog/kitchen"){
    folder = "kitchen";
    var fileNames = ["sauce_pan", "sautee_pan"];
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
  }else if(url == "https://localhost:3000/catalog/steel_forks"){
    folder = "silverware";
    var fileName = "steel_forks";
  }else if(url == "https://localhost:3000/catalog/steel_knives"){
    folder = "silverware";
    var fileName = "steel_knives";
  }else if(url == "https://localhost:3000/catalog/gloves"){
    folder = "disposables";
    var fileName = "gloves";
  }else if(url == "https://localhost:3000/catalog/trashbags"){
    folder = "disposables";
    var fileName = "trashbags";
  }else if(url == "https://localhost:3000/catalog/paper"){
    folder = "office";
    var fileName = "paper";
  }else if(url == "https://localhost:3000/catalog/staples"){
    folder = "office";
    var fileName = "staples";
  }else if(url == "https://localhost:3000/catalog/sauce_pan"){
    folder = "kitchen";
    var fileName = "sauce_pan";
  }else if(url == "https://localhost:3000/catalog/sautee_pan"){
    folder = "kitchen";
    var fileName = "sautee_pan";
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
      itemListing.setAttribute("id", "item-listing");
      //itemCard.className = "item-tile";
      itemListing.innerHTML = "<div id='item-listing-photo'><img src='/public/" + fileName + ".jpg'/></div><div id='item-listing-info'><div id='item-listing-title'> <h1>" + itemName + "</h1></div><div id='item-listing-price'><h2>" + itemPrice + "</h2><div id='item-listing-description'><p>" + itemDesc + "</p></div><div id='item-listing-purchase'><div id='id-listing-price'></div><input type='text' id='orderQty' value='1'/><button onclick='submitQty()'>Order</button></div></div></div>";
        
      document.body.appendChild(itemListing); // Maybe use a different append fucntion here
        // Scrapped array of items idea
    }
  };
    xhttp.open("GET", "https://localhost:8080/static/" + folder + "/" + fileName + ".txt", false);   //Might need " at end of fileName here
    xhttp.send();
  
}




function loadOrders(){
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var orderRaw = this.responseText;      // Raw text file data
      var hashIndex = orderRaw.indexOf("#");
      var dollarIndex = orderRaw.indexOf("$");
      var itemName = orderRaw.slice(0, hashIndex);
      var itemQuantity = orderRaw.slice(++hashIndex, --dollarIndex);
      var itemPrice = orderRaw.slice(dollarIndex + 2);
      console.log(itemPrice);
        
      
      var itemOrder = document.createElement("div");
      var orderList = document.getElementById("orders-body")
      itemOrder.setAttribute("class", "orders-single");
      
      itemOrder.innerHTML = "<div class='orders-item'><img class='orders-image' src=" + "/public/stock_hot.jpg" + "/><h2>" + itemName + "</h2></div><div class='orders-quantity'><p>Quantity: " + itemQuantity + "</p></div><div class='orders-price'><h2>$" + itemPrice * itemQuantity + "</h2></div>";
        
      orderList.appendChild(itemOrder); 
    }
  };
    xhttp.open("GET", "https://localhost:8080/orders/" + "adminorders.txt", false);   //Might need " at end of fileName here
    xhttp.send();
} 





  //might have issues with not having array declared if all urls failed

  // NOTES: Use url to make vars to hold parent folder name, array of file names, make descriptions in text files

  /*if(url == "https://localhost:3000/catalog/dishes"){
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
          
        itemGrid.appendChild(itemCard); // Maybe use a different append fucntion here
          // Scrapped array of items idea
      }
    };
      xhttp.open("GET", "https://localhost:8080/static/plates/ceramic.txt", false);
      xhttp.send();
    
      /*********************************************************
      ********************SECOND ITEM***************************
      **********************************************************/
    
      /*xhttp.onreadystatechange = function() {
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
            
          itemGrid.appendChild(itemCard); // Maybe use a different append fucntion here
            // Scrapped array of items idea
        }
      };
        xhttp.open("GET", "https://localhost:8080/static/plates/dark_ceramic.txt", false);
        xhttp.send();




  }else if(url == "https://localhost:3000/catalog/silverware"){
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
          
        itemGrid.appendChild(itemCard); // Maybe use a different append fucntion here
          // Scrapped array of items idea
      }
    };
      xhttp.open("GET", "https://localhost:8080/static/silverware/steel_forks.txt", false);
      xhttp.send();
    
      /*********************************************************
      ********************SECOND ITEM***************************
      **********************************************************/
    
      /*xhttp.onreadystatechange = function() {
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
            
          itemGrid.appendChild(itemCard); // Maybe use a different append fucntion here
            // Scrapped array of items idea
        }
      };
        xhttp.open("GET", "https://localhost:8080/static/silverware/steel_knives.txt", false);
        xhttp.send();
}

*/
