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

    // routes ======================================================================

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos', function(req, res) {

        // use mongoose to get all todos in the database
        //Todo.find(function(err, todos) {

        var todos = storage.getAllData();

        res.json(todos); // return all todos in JSON format
    });

    // create todo and send back all todos after creation
/*    app.post('/api/todos', function(req, res) {

        // create a todo, information comes from AJAX request from Angular
        try {

        }

            // get and return all the todos after you create another


    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function(req, res) {
        Todo.remove({
            _id : req.params.todo_id
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });
    });
*/

module.exports = server;
