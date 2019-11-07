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
module.exports = router;