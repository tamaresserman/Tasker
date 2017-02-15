var data = require("../data.json");

exports.addHobby= function(req, res) {    
	// Your code goes here

	console.log("addHobby called");

	var name = req.query.name;
	var time = req.query.time + " hours";

	var newHobby= {
		name: name,
		//description: description,
		time: time,
	}

	data.hobbies.push(newHobby);

	// res.redirect('/');
	res.render('hobbies', data)
 }