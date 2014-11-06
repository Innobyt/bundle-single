'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GamerepoSchema = new Schema({
    threshold   : Number,
    gamename    : String,
    gamekeys    : Array
});

module.exports = mongoose.model('gamerepo', GamerepoSchema);