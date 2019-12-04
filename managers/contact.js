var express = require("express");
var router = express.Router();

router.get("/contact-home", (req, res) => {
    res.render("contact/contact-home", { title: "Contact" });
});

module.exports = router;