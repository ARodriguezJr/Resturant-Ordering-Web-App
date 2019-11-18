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

router.get("/record-keeping", (req, res) =>{
    res.render("catalog/items", {title: "recordkeeping"});
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

router.get("/steel_forks", (req, res) =>{
    res.render("catalog/item-listing", {title: "Stainless Steel Forks"});
});

router.get("/steel_knives", (req, res) =>{
    res.render("catalog/item-listing", {title: "Stainless Steel Knives"});
});

module.exports = router;