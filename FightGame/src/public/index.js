
// create two instances
var firstFighter = new Fighter("Daredevil",5,800);

var secondFighter = new ImprovedFighter("Punisher",7,700);

// call fight function
console.log("The first fighter today is "+ firstFighter.name);
console.log(firstFighter);
console.log("The second fighter today is "+ secondFighter.name);
console.log(secondFighter);


document.addEventListener("DOMContentLoaded", function() {
    

try{
	fight(firstFighter, secondFighter,[ 25, 13, 14,40,2,7]).then(() => {
      var p = document.createElement('p');
					p.innerHTML = "<strong> The game is over. </strong>";
					document.getElementById("game").appendChild(p);
    });
}
catch(err){
	console.log(err.Message);
}


}, false);