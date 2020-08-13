const express = require("express");

const app = express();

app.use(express.static("public"));

app.listen(process.env.PORT || 3000, function(req, res){
  console.log("Sever is running on port 3000");
});

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
});
