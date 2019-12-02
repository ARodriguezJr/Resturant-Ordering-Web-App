// JS file to manage orders and ordering
function submitQty(){
    // read url to see what was ordered
    var url =  window.location.href;
    var quantity = document.getElementById("orderQty").value;
    var item = url.slice(31);
    
    var itemPriceRawContent = document.getElementById("item-listing-price").textContent;
    var itemPriceRaw = itemPriceRawContent.slice(1);
    var itemPrice = parseInt(itemPriceRaw, 10);

    console.log("item: " + item);
    var params = "item=" + item + "&quantity=" + quantity + "&price=" + itemPrice;

    console.log(params);

    /*if(url == "https://localhost:3000/catalog/ceramic"){
        var params = "item=" + "ceramic" + "&quantity=" + quantity;
    }*/

    var http = new XMLHttpRequest();
    http.open("POST", "https://localhost:8080/incomingOrder", false);

    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //http.setRequestHeader("Content-length", params.length);
    //http.setRequestHeader("Connection", "close");

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }
    
    http.send(params);
    // add order to text file of users
    //change innerHTML of ordering div to say order added
}