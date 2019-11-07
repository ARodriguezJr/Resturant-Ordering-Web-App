// JS file to help laod dynamic info form backend for catalog

function loadItems(){
  var url =  window.location.href;
  var xhttp = new XMLHttpRequest();
  var folder = "defualtfolder";

  if(url == "https://localhost:3000/catalog/dishes"){
    folder = "plates";
    var fileNames = ["ceramic.txt", "dark_ceramic.txt"];
  }else if(url == "https://localhost:3000/catalog/silverware"){
    folder = "silverware";
    var fileNames = ["steel_forks.txt", "steel_knives.txt"];
  }else{
    var fileNames = ["failText.txt"]
  }

  fileNames.forEach(function(fileName){
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
      xhttp.open("GET", "https://localhost:8080/static/" + folder + "/" + fileName, false);   //Might need " at end of fileName here
      xhttp.send();
  });
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
}