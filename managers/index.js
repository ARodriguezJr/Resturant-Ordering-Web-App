var express = require("express");
var router = express.Router();

//var index_controller = require("../controllers/siteroot/indexController");

router.get("/", (req, res) =>{
    res.render("siteroot/index", {title: "home"});
});

module.exports = router;