var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Welcome to Kishore Test");
});

app.listen(4000);
