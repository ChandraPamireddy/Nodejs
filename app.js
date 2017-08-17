var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Welcome to Kishore World");
});

app.listen(4000);
