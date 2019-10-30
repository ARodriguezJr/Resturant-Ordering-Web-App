var express = require("express");
var router = express.Router();

router.get("/catalog-home", (req, res) =>{
    res.render("catalog/catalog-home", {title: "Catalog"});
});

router.get("/dishes", (req, res) =>{
    res.render("catalog/items", {title: "Dishes"});
});

module.exports = router;