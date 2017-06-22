//functions

//Decleration
function hello(){
	console.log("Hello!!!!");
}

hello();







var hey = function(){
	console.log("hey!");
}

hey();

var karen = function(){
	console.log("karen");
}
karen();

function addTwos(){
	var x = 4;
	var y = 2;
	console.log(x * y);
}
addTwos();


function multiplyTenTimesTwo(){
	var x = 10;
	var y = 2;
	console.log(x * y);
}

multiplyTenTimesTwo();



function numbersEntered(x){
	console.log("The number entered is: ", x);	
}

numbersEntered(5);
numbersEntered(7);
numbersEntered(100000);




function addAnyTwoNumbers(x, y){
	console.log("The sum is: ", x + y);
}

addAnyTwoNumbers(17, 1000);
addAnyTwoNumbers(19, 29);
numbersEntered


function fullName(first, last){
	console.log(first + " " + last);
}

fullName("alberto", "luz");

function petNameAndBreed(name, breed){
	var details = name + ", " + breed;
	console.log(details);
	return details;
}
petNameAndBreed("lammy", "husky");





function price(){
	var tax = 0.07;
	var price = 1;
	var quantity = 10;
	var result = (quantity * price) * (1 + tax);
	console.log(result);
}
price();





