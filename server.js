var Express = require("express");
var App = Express();
var BodyParser = require("body-parser");
var CookieParser = require("cookie-parser");
var Multer = require("multer");
var Morgan = require("morgan");
var Mongoose = require("mongoose");
var MethodOverride = require("method-override");
var Compression = require("compression");

        // set the static files location /public/img will be /img for users
    App.use(Morgan('dev'));                                         // log every request to the console
    App.use(BodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    App.use(BodyParser.json());                                     // parse application/json
    App.use(BodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    App.use(Express.static('public'));
    App.use(MethodOverride());
    App.use(Compression());

    Mongoose.connect("127.0.0.1:27017");

    //database
    var Users = Mongoose.model("Users", {
    	name: String, 
    	email: String,
    	occupation:String, 
    	help: String, 
    	heard:String, 
    	date: { type: Date, default: Date.now } 

    });

    App.get('/api/administrator', function(req, res) {


            // get and return all the todos after you create another
            Users.find(function(err, user) {
                if (err){
                    res.send(err)
                } 
                else {
                	res.json(user);
                }
                
            });
        });

    


    





    App.post('/api/users', function(req, res) {

        // create a todo, information comes from AJAX request from Angular
        Users.create({
            name : req.body.name,
            email: req.body.email,
            occupation: req.body.occupation,
            help: req.body.help,
            heard:req.body.heard

           
        }, function(err, user) {
            if (err){
                res.send(err);
            }

            // get and return all the todos after you create another
            Users.find(function(err, user) {
                if (err){
                    res.send(err)
                } 
                else {
                	res.json(user);
                }
                
            });
        });

    });

    App.get('*', function(req, res) {
        res.sendfile('public/js/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });


    App.listen(3306);
    console.log("App's up at port 3306");


