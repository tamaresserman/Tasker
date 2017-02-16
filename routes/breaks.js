//var data = require("../data.json");
/*
 * GET home page.
 *///var data = require("../addBreak.json");

exports.view = function(req, res){
	/*console.log(data);*/
  res.render('breaks');
};