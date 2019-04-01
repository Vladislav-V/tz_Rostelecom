var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");

var app = express();
var jsonParser = bodyParser.json();

app.use(express.static(__dirname + "/public"));
// получение списка данных
app.get("/getimages", function(req, res){

  //  var content = fs.readFileSync("images.json", "utf8");
  //  var images = JSON.parse(content);
    res.sendFile(__dirname + "/public/index.html");
    //res.send(images);
});
 // удаление пользователя по id
// app.get('C:/Users/user-/Desktop/Dev/expressapp/images.json', function(req, res){
//   var content = fs.readFileSync("images.json", "utf8");
//   var images = JSON.parse(content);
//   res.send(images);
// })


app.listen(8888, function(){
    console.log("Сервер ожидает подключения...");
});
