const express = require("express");
const bodyParser = require("body-parser");
var path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/sec1', (req, res) => {
    res.sendFile(__dirname + '/sec1.html');
});
app.get('/sec2', (req, res) => {
  res.sendFile(__dirname + '/sec2.html');
});
app.get('/sec3', (req, res) => {
  res.sendFile(__dirname + '/sec3.html');
});
app.get('/result', (req, res) => {
  res.sendFile(__dirname + '/result.html');
});
app.get('/logout', (req, res) => {
  res.redirect('/');
});

app.post('/login', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    var regx = /^([a-zA-Z0-9\.-]+)@([vitstudent])+.([ac]+)(.[in]+)?$/;
  
    if(username.match(regx) && password.length >= 8){
      res.redirect('/sec1');
    }
    else{
      let alert = require('alert'); 
      alert("You've entered a wrong email id, Please check your email id")
    }
    res.end();
});


app.listen(3000, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});