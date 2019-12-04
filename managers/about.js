var express = require("express");
var router = express.Router();

router.get("/about-home", (req, res) => {
    res.render("about/about-home", { title: "About" });
});

module.exports = router;