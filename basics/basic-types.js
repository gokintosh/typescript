"use strict";
exports.__esModule = true;
exports.dumpStringOrNumber = exports.dumpObject = exports.introducePerson = exports.introduction = exports.addNumbers = exports.isACat = void 0;
var isACat = function (animal) { return animal === "cat"; };
exports.isACat = isACat;
function addNumbers(a, b) {
    return a + b;
}
exports.addNumbers = addNumbers;
var introduction = function (name) { return "Hello " + name; };
exports.introduction = introduction;
var introducePerson = function (name) { return console.log(exports.introduction(name)); };
exports.introducePerson = introducePerson;
var dumpObject = function (type, object) { return type + ":" + JSON.stringify(object); };
exports.dumpObject = dumpObject;
var dumpStringOrNumber = function (info) { return "value " + info; };
exports.dumpStringOrNumber = dumpStringOrNumber;
