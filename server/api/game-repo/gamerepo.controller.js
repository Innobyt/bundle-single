'use strict';

var gamerepo = require('./gamerepo.model');

// create a game-repo entry
exports.create = function(req, res) {

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