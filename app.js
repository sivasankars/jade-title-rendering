var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response){
    response.render('index', {title: 'Home'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


module.exports = app;
