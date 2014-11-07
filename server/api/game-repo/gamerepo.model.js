'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GamerepoSchema = new Schema({
    threshold   : Number,
    gamename    : String,
    gamekey     : String,
    keystatus	: Boolean
});

module.exports = mongoose.model('gametitle', GamerepoSchema);