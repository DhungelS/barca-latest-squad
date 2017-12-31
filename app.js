var express = require("express");
var app = express();
var request = require("request");


app.set("view engine", "ejs"); 


app.get("/", (req, res) => {
  
  var url = "http://api.football-data.org/v1/teams/81/players"
  request(url, function(error, response, body){
    if(!error && response.statusCode == 200) {
        var data = JSON.parse(body)
        res.render("results", {data: data});
    }
 });

})

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});