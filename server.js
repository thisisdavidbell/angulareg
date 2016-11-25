// server.js

    // set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
    var Storage = require('./Storage');

    // configuration =================


    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

    // listen (start app with node server.js) ======================================
    var server = app.listen(8080);
    console.log("App listening on port 8080");

    // Setup DB =====================

    // DONT USE MONGO // mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');     // connect to mongoDB database on modulus.io

    var storage = new Storage(); // use my storage in memory db instead

    // application ===============================================

    app.get('/', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

    // routes ======================================================================

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos', function(req, res) {

        var todos = storage.getAllData();
        res.json(todos); // return all todos in JSON format

    });

    // create todo and send back all todos after creation
    app.post('/api/todos', function(req, res) {
      console.log(req.body);

    // create a todo, information comes from AJAX request from Angular
      var uuid = storage.addData(req.body.name, req.body.text, req.body.done);


      var todos = storage.getAllData();     // get and return all the todos after you create another

    res.status(201).json(todos);
    });

    // delete a todo
    app.delete('/api/todos/:uuid', function(req, res) {

            var uuid = req.params.uuid;
            storage.deleteData(uuid); // delete record matching uuid

            var todos = storage.getAllData();             // get and return all the todos after you create another

            res.status(200).json(todos);    // return 200 because we are returning content. (204 is no content)
    });


module.exports = server;
