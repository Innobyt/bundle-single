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
    gamerepo.find({}, function(err, doc){
        return err ? handleError(res, err)
        : res.json(doc);
    });
 };

// show get an individual game-repo document
exports.show = function(req, res) {
  gamerepo.findById(req.params.id, function (err, doc) {
    if(err) { return handleError(res, err); }
    if(!doc) { return res.send(404); }
    return res.json(doc);
  });

 };

// update (is add) gametitles collection, with additional gamekeys
exports.update = function(req, res) {

 };

// destroy an individual game-repo document
exports.destroy = function(req,res){
  gamerepo.findById(req.params.id, function (err, doc) {
    
    // handle error
    if(err) return handleError(res, err);
    
    // if document by _id found, remove, return error else 
    // attempt to remove document if error, return error, 
    // else, return success
    return !doc 
    ? res.send(404) 
    : doc.remove(function(err) { 
        return err ? handleError(res, err) : res.send(204);
    });

  });
 };

function handleError(res, err) {
  return res.send(500, err);
}

// returns an array of entries
function parse_form(args){

    // parse gamekeys as an array
    var gamekeys = parse_multiformat_gamekeys(args.gamekeys);

    // create an array of entries
    for(var i = 0, array_of_entries = []; i < gamekeys.length; i++){
        array_of_entries.push({ 
        	'threshold' : args.threshold, 
        	'gamename' 	: args.gamename, 
        	'gamekey' 	: gamekeys[i], 
        	'keystatus' : true
        });
    }

    return array_of_entries;
 }

// accepts, string or csv, returns an array of gamekeys
function parse_multiformat_gamekeys(data){
    
    // support unix/window compliance
    var gamekeys_array = data.replace( /\r\n/g, "," );
    gamekeys_array = gamekeys_array.replace( /\n/g, "," );
    gamekeys_array = gamekeys_array.replace( /\s/g, "," );
    gamekeys_array = gamekeys_array.split( "," );

    // check if last array is ""
    while(gamekeys_array[gamekeys_array.length - 1] == "")
        gamekeys_array.pop();
    }

    return gamekeys_array;
}}