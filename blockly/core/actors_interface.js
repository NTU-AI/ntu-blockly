'use strict';

goog.module('Blockly.actorsInterface');

let actors = undefined;

const setActors = function(_actors){
    actors = _actors;
}
exports.setActors = setActors;

const getActors = function(){
    return actors;
}
exports.getActors = getActors;