
// create two instances
var firstFighter = new Fighter("Sam Smith",5,5000);

var secondFighter = new ImprovedFighter("Adam Benn",7,4000);

// call fight function
console.log("The first fighter today is "+ firstFighter.name);
console.log(firstFighter);
console.log("The second fighter today is "+ secondFighter.name);
console.log(secondFighter);


document.addEventListener("DOMContentLoaded", function() {
    

try{
	fight(firstFighter, secondFighter,[ 25, 13, 14,40,2,7]).then(() => {
      console.log("The game is over.");
    });
}
catch(err){
	console.log(err.Message);
}

    
}, false);