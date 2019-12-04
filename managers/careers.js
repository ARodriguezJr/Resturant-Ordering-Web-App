var express = require("express");
var router = express.Router();

router.get("/careers-home", (req, res) => {
    res.render("careers/careers-home", { title: "Careers" });
});

module.exports = router;