//var data = require("../data.json");
/*
 * GET home page.
 *///var data = require("../addBreak.json");

//var data = require("../dataTasks.json");//var data = require('../data.json');
var list = require("../list.json");
exports.view = function(req, res) {
	//console.log(data);
	res.render('breaks', list);
};