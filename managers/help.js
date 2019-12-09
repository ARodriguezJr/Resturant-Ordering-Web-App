var express = require("express");
var router = express.Router();

router.get("/help-home", (req, res) => {
    res.render("help/help-home", { title: "Help" });
});

router.get("/terms-of-use", (req, res) => {
    res.render("help/terms", { title: "Terms of Use" });
});

router.get("/privacy", (req, res) => {
    res.render("help/privacy", { title: "Privacy" });
});

module.exports = router;