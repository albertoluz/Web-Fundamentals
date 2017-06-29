function cityState(city,state){
	var cityState="I am from "+city+state;
	console.log(cityState)
}
cityState("Indianapolis", " Indiana")


function printBills(rent, wireless, water, electricity){
	var totalBills = rent + water + wireless + electricity;
	console.log(totalBills);
}


printBills(100, 90, 80, 70);



function printOddOrEven(x){
	if (x % 2 === 0){
		console.log("The number is even")
	}else{
		console.log("The number is odd")
	}
}
printOddOrEven(2);






for(var i = 2; i < 21; i+=2){
	console.log(i);
}




for(var i = 25; i < 101; i+=25){

	if (i === 50){
		console.log("Half way there");
	}else{
		console.log(i);
	}
}


for(var i = 1; i < 11; i+=1){

	if (i === 10){
		console.log("ten");
	} else if(i === 9){
		console.log("nine")
	}else{
		console.log(i);
	}
}

var score = 0;
while(score < 10){
	score++;
	console.log("Your score: ", score);
	if(score === 10){
		console.log("You won!!!");
	}
}



var hoobies = ["playing on phone", " sleeping", "riding my bike", "eating"];
var awsomeCars = ["Lamborgini", "Mustang", "Camero", "Charger", "Ferrari", "Porsche", "Buggati"];

for(var i = 0; i < hoobies.length; i++){
	console.log(hoobies[i]);
}
for(var i = 0; i < awsomeCars.length; i++){
	console.log(awsomeCars[i]);
}


var favoriteCandy = ["Skittles", "Kit-Kat", "Snickers", "Hersheys", "Air Heads", "M&M'S"];

console.log(favoriteCandy.length);
console.log(favoriteCandy);

favoriteCandy.push("Skittles");
console.log(favoriteCandy);

var name = ['a', 'l', 'b', 'e', 'r', 't','o'];
var rev
