var list = require("../list.json");

exports.addTask= function(req, res) {  
	// Your code goes here

	console.log("addTask called");

	var name = req.query.name;
	var date = req.query.date;
	var startTime = req.query.startTime;
	var endTime = req.query.endTime;
	var location= req.query.location;
	var Mess= req.query.Mess;
	var Time= req.query.Time;
	var Size= req.query.Size;
	var Other= req.query.Other;

	var newlist= {
		name: name,
		//description: description,
		date: date,
		startTime: startTime,
		endTime: endTime,
		location: location,
		Mess: Mess,
		Time: Time,
		Size: Size,
		Other: Other
	}

	console.log(list);

	list.list.push(newlist);


	// res.redirect('/');
	res.render('inputHobbies', list)
}