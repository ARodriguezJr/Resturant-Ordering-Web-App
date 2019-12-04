var express = require("express");
var router = express.Router();

router.get("/reviews-home", (req, res) => {
    res.render("reviews/reviews-home", { title: "Reviews" });
});

module.exports = router;