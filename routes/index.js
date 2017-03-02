var data = require('../data.json'); 

/*
 * GET home page.
 */

exports.view = function(req, res){
  data['showAlternate'] = false;
  res.render('index', data);
};

exports.view2 = function(req, res){
  data['showAlternate'] = true;
  res.render('index', data);
};