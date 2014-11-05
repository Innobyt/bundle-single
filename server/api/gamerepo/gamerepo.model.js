'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    threshold   : Number,
    gamename    : String,
    gamekeys    : [Object]
});

mongoose.model('gamerepo', schema);