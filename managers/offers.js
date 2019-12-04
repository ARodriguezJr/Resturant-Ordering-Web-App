var express = require("express");
var router = express.Router();

router.get("/offers-home", (req, res) => {
    res.render("offers/offers-home", { title: "Offers" });
});

module.exports = router;