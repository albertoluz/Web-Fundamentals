

var elevatorUp = true;
var elevatorDown = true;
var elevatorBroken = true;
var elevatorIsStuckWhileWeAreOnIt = true;
var elevatorNumber = 13;

if(elevatorUp === true){
	console.log("Going up!");
} else {
	console.log("Going Down!");
}

if(elevatorBroken === true){
	console.log("Use stairs.");
} else {
	console.log("What floor are we on?");
}

if(elevatorIsStuckWhileWeAreOnIt){
    console.log("Oh no! WE are stuck!");
}


if(elevatorBroken || elevatorDown){
	console.log("Oh no!!!");
}

if(elevatorNumber === 13 && elevatorIsStuckWhileWeAreOnIt){
	console.log("This is going to be a bad day.")
}
