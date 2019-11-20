var express = require("express");

var path = require("path");
var bodyParser = require("body-parser");

const port = 3000;

const fs = require('fs');

var app = express();

var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
app.use(express.static(path.join(__dirname, 'public')));

//setup template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", function (request, response) {
    //response.send("Let's start coding");
    response.render("index")
});

app.post("/welcome", urlencodedParser, function (request, response) {
    response.render("welcome", {
        data: request.body
    });
    fs.appendFile('emaillist.txt', request.body.email + "\n", function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
});

app.listen(port, () => {
    console.log(`server listening on ${port}`);
});


