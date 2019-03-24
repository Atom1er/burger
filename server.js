var express = require("express");
var exphbs = require("express-handlebars");

var app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("app/public"));

var router = express.Router();

require('./app/route/handlebars.js')(app);
app.set('views', __dirname + '/app/views');
app.set("view engine", "handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main",
    layoutsDir:__dirname+'/app/views/layouts',
    partialsDir: __dirname+'/app/views'
}));



var PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log('app listenning to http://localhost:'+PORT);
});