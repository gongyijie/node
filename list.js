var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.get("/", function (req, res) {
    res.render("1", {
        "dongxi" : "100",
        "qian" : "1"
    });
})

app.listen(3000);
