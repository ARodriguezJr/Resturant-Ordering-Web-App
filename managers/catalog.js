var express = require("express");
var router = express.Router();

router.get("/catalog-home", (req, res) =>{
    res.render("catalog/catalog-home", {title: "Catalog"});
});

router.get("/dishes", (req, res) =>{
    res.render("catalog/items", {title: "Dishes"});
});

router.get("/silverware", (req, res) =>{
    res.render("catalog/items", {title: "Silverware"});
});

router.get("/disposables", (req, res) =>{
    res.render("catalog/items", {title: "Disposables"});
});

router.get("/office", (req, res) =>{
    res.render("catalog/items", {title: "Office"});
});

router.get("/kitchen", (req, res) =>{
    res.render("catalog/items", {title: "Kitchen"});
});

/**********************************************
 ***************ITEMS ROUTING******************
 **********************************************/

router.get("/ceramic", (req, res) =>{
    res.render("catalog/item-listing", {title: "Ceramic Plates"});
});

router.get("/dark_ceramic", (req, res) =>{
    res.render("catalog/item-listing", {title: "Dark Ceramic Plates"});
});

router.get("/paper_plates", (req, res) =>{
    res.render("catalog/item-listing", {title: "Paper Plates"});
});

router.get("/paper_bowls", (req, res) =>{
    res.render("catalog/item-listing", {title: "Paper Bowls"});
});

router.get("/steel_forks", (req, res) =>{
    res.render("catalog/item-listing", {title: "Stainless Steel Forks"});
});

router.get("/steel_knives", (req, res) =>{
    res.render("catalog/item-listing", {title: "Stainless Steel Knives"});
});

router.get("/steel_spoons", (req, res) =>{
    res.render("catalog/item-listing", {title: "Stainless Steel Spoons"});
});

router.get("/plastic_spoons", (req, res) =>{
    res.render("catalog/item-listing", {title: "Plastic Spoons"});
});

router.get("/plastic_forks", (req, res) =>{
    res.render("catalog/item-listing", {title: "Plastic Forks"});
});

router.get("/plastic_knives", (req, res) =>{
    res.render("catalog/item-listing", {title: "Plastic Knives"});
});

router.get("/gloves", (req, res) =>{
    res.render("catalog/item-listing", {title: "Gloves"});
});

router.get("/trashbags", (req, res) =>{
    res.render("catalog/item-listing", {title: "Trashbags"});
});

router.get("/clorox_spray", (req, res) =>{
    res.render("catalog/item-listing", {title: "Clorox Spray"});
});

router.get("/paper_towels", (req, res) =>{
    res.render("catalog/item-listing", {title: "Paper Towels"});
});

router.get("/paper", (req, res) =>{
    res.render("catalog/item-listing", {title: "Paper"});
});

router.get("/staples", (req, res) =>{
    res.render("catalog/item-listing", {title: "Staples"});
});

router.get("/ballpoint_pens", (req, res) =>{
    res.render("catalog/item-listing", {title: "Ballpoint Pens"});
});

router.get("/sauce_pan", (req, res) =>{
    res.render("catalog/item-listing", {title: "Sauce Pan"});
});

router.get("/sautee_pan", (req, res) =>{
    res.render("catalog/item-listing", {title: "Sautee Pan"});
});

router.get("/strainer", (req, res) =>{
    res.render("catalog/item-listing", {title: "Strainer"});
});

module.exports = router;