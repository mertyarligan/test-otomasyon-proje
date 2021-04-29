var express = require("express");
var bodyParser = require("body-parser"); 
var _= require("underscore");

var app = express();

app.use(bodyParser.json());

app.get("/", function(req, res){

    res.send("test Çalıştı");
})

app.post("/kisi", function(req, res){//id ile veri çekilmektedir
//res.send('post isteği gönderildii.');
let body = _.pick(req.body, "first_name","last_name");
//res.send(body.first_name);
res.send(body);
})




app.listen(3000);