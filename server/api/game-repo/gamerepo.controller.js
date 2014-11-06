'use strict';

var gamerepo = require('./gamerepo.model');

// create a game-repo entry
exports.create = function(req, res) {
    
    gamerepo.findOne({ gamename: req.body.gamename }, function(err, found){

    	// handle error
    	if(err) return handleError(res,err);

    	return found // if document by property gamename found, do not create, else create
    	? handleError(res,{message: ' duplicate entry found'})
    	: gamerepo.create(parse_form(req.body),function(err, doc){ 
            return err ? handleError(res,err) : res.json(201, parse_form(req.body));  
        });
    	
    });
 };

// index get a list of game-repo documents
exports.index = function(req, res) { 

 };

// show get an individual game-repo document
exports.show = function(req, res) {

 };

// update an individual game-repo document
exports.update = function(req, res) {

 };

// destroy an individual game-repo document
exports.destroy = function(req,res){

 };

function handleError(res, err) {
  return res.send(500, err);
}

function parse_form(args){

    // support unix/window compliance
    var gamekeys = args.gamekeys.replace( /\r\n/g, "," );
    gamekeys = gamekeys.replace( /\n/g, "," );
    gamekeys = gamekeys.replace( /\s/g, "," );
    gamekeys = gamekeys.split( "," );

    // check if last array is ""
    if(gamekeys[gamekeys.length - 1] == ""){
        gamekeys.pop();
    }

    // store each gamekey with status
    var gamekey_object = [];
    for(var i = 0; i < gamekeys.length; i++){
        gamekey_object.push({ 'key' : gamekeys[i], 'status' : true });
    }

    return new gamerepo({
        threshold   : args.threshold,
        gamename    : args.gamename,
        gamekeys    : gamekey_object
    });
 }