$(document).ready(function(){
	$("#theForm").submit(function(event){
		event.preventDefault();

		//var randomPerson = new rando();
		var $inputs =$("#theForm :input");
		var employeeInfo = {};
		var empArray =[];

		$inputs.each(function(){
			employeeInfo[this.name] = $(this).val();		
		});
		
		var person = new createPerson(employeeInfo);

		
		createList(person);

		//empArray = createArray(person);
		//console.log(empArray);
		$(".infoTable").on('click', '.remove', function(){
			(this).closest("tr").remove();
		});
				
	});



});

function createPerson(employee){
	this.name = employee.firstname + " " + employee.lastname;
	this.employeeNumber = employee.employeenumber;
	this.title = employee.title;
	this.score = employee.reviewscore;
	this.salary = employee.salary;
}
//function createArray(person){
//	var array = [];
//	array.push(person);
//}

function createList(person){
	var reviewColor;
	switch (person.score){
		case "1":
			reviewColor = "one";
			break;
		case "2":
			reviewColor = "two";
			break;
		case "3":
			reviewColor = "three";
			break;
		case "4":
			reviewColor = "four";
			break;
		case "5":
			reviewColor= "five";
			break;
		};
	$(".infoTable").append("<tr><td> " + person.name + " </td><td> " + person.employeeNumber + "</td><td>" + person.title + "</td><td class='review "+ reviewColor +"'>"+ person.score + "</td><td>"+ person.salary + "</td><td><button class='remove'>" + 'remove' + "</td>");
	
}
	function getColor(person){
	switch (person.score){
		case "1":
			$("#review").css("background-color", "#FF0000");
			break;
		case "2":
			$("#review").css("background-color", "#0000FF");
			break;
		case "3":
			$("#review").css("background-color", "#008000");
			break;
		case "4":
			$("#review").css("background-color", "#FFFF00");
			break;
		case "5":
			$("#review").css("background-color", "#FFA500");
			break;
		};
}
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);

}

