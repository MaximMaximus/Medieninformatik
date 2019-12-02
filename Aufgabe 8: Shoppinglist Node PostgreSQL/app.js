var express = require("express");
var pg = require("pg");
var bodyParser = require("body-parser");

var CON_STRING = process.env.DB_CON_STRING;
if (CON_STRING == undefined) {
    console.log("Error: Environment variable DB_CON_STRING not set!");
    process.exit(1);
}

pg.defaults.ssl = true;
var dbClient = new pg.Client(CON_STRING);
dbClient.connect();

var urlencodedParser = bodyParser.urlencoded({
    extended: false
});

const PORT = 3000;

var app = express();

app.set("views", "views");
app.set("view engine", "pug");

app.get("/", function (req, res) {
    dbClient.query("SELECT * FROM shopping_items_simple ORDER BY TITLE", function (dberr, dbres) {
        res.render("shoppingitems", {
            shoppingItems: dbres.rows
        });
    });
});

app.post("/shoppingitems", urlencodedParser, function (req, res) {
    var shoppingItem = req.body.shoppingItem;
    var deleteItemId = req.body.delete_item_id;
    var buyItemId = req.body.shopping_item_buy_id;

    var amountinc = req.body.amount_inc;
    var incId = req.body.inc_Id;

    var amountdec = req.body.amount_dec;
    var decId = req.body.dec_Id;

    var deleteAll = req.body.delete_all;

    if (shoppingItem != undefined) {
        dbClient.query("INSERT INTO shopping_items_simple (title, amount, bought) VALUES ($1, $2, $3)", [shoppingItem, 1, false], function (dberr, dbres) {
        });
    }
    if(buyItemId != undefined) {
        dbClient.query("UPDATE shopping_items_simple SET bought = true WHERE id=$1", [buyItemId], function (dberr, dbres) {
        });
    }
    if (deleteItemId != undefined) {
        dbClient.query("DELETE FROM shopping_items_simple WHERE id=$1", [deleteItemId], function (dberr, dbres) {
        });
    }
    if (amountinc != undefined) {
        amountinc++;
        dbClient.query("UPDATE shopping_items_simple SET amount = ($1) WHERE id=$2", [amountinc, incId], function (dberr, dbres) {
        });
    }
    if (amountdec != undefined) {
        if (amountdec > 0 && amountdec != 1) {
            amountdec--;
            dbClient.query("UPDATE shopping_items_simple SET amount = ($1) WHERE id=$2", [amountdec, decId], function (dberr, dbres) {
            });
        }
    }
    if(deleteAll != undefined) {
        dbClient.query("DELETE FROM shopping_items_simple", function(dberr, dbres) {
        });
    }
    res.redirect("/");
});

app.listen(PORT, function () {
    console.log(`Shopping App listening on Port ${PORT}`);
});