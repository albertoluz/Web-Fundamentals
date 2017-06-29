

//object Literal
var player = {

    name 			: "",
    life 			: 100,
    damage 			: 0,
    hasSniperRifle 	: true,
    hasPlasmaSword  : false,
    rank 			: ["soldier", "mage", " spartan", "barbarian", "elite master"],
    hasSword        : true,

    challenge       : function(){
    	console.log("sir, would you care to do battle?");
    },

    fightMe   		: function(){
    	console.log("Would you care to fight " + this.name + "?");
    },
    attack 			: function(target){
    	console.log(this.name + " attacks " + target.name  + " for " + this.damage);
    	target.life -= this.damage;
    },
    pickedUpSword    : function(){
    	if(this.hasSword === true){
            console.log(this.name + " picked up the sword"); 
    	}
    },
    superPunch      : function(){
    	if(this.puches === true){
    		console.log(this.name + " punches");
    	}
    },




};


var saul = Object.create(player);
saul.name = "saul";
saul.life = 120;
saul.damage = 20; 
saul.hasSniperRifle = true;
saul.hasSword = true;
saul.rank = "spartan";
saul.challenge();
saul.fightMe();
saul.pickedUpSword();




var alberto = Object.create(player);
alberto.name = "alberto";
alberto.life = 1000;
alberto.damage = 500;
alberto.hasSniperRifle = true;
alberto.rank ="elite master";
alberto.challenge();
alberto.fightMe();
alberto.attack(saul);

console.log(saul);
console.log(alberto);
saul.punch(alberto);
