var dataTask = require("../dataTasks.json");

exports.addTask= function(req, res) {    
	// Your code goes here

	console.log("addTask called");

	var name = req.query.name;
	var date = req.query.date;
	var startTime = req.query.startTime;
	var endTime = req.query.endTime;

	var newTasks= {
		name: name,
		//description: description,
		date: date,
		startTime: startTime,
		endTime: endTime
	}

	console.log(newTasks);

	dataTask.Tasks.push(newTasks);

	// res.redirect('/');
	res.render('inputTasks', dataTask)
 }