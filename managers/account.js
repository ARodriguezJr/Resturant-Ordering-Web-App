var express = require("express");
var router = express.Router();

router.get("/myAccount", (req, res) =>{
    res.render("account/myAccount", {title: "Account"});
});

module.exports = router;