
// create two instances
var firstFighter = new Fighter("Daredevil",5,300);

var secondFighter = new ImprovedFighter("Punisher",7,200);

// call fight function
console.log("The first fighter today is "+ firstFighter.name);
console.log(firstFighter);
console.log("The second fighter today is "+ secondFighter.name);
console.log(secondFighter);


document.addEventListener("DOMContentLoaded", function() {
    

try{
	fight(firstFighter, secondFighter,[ 0, 13, 16, ,2,7]).then(() => {
      var p = document.createElement('p');
					p.innerHTML = "<strong> The game is over. </strong>";
					document.getElementById("game").appendChild(p);
    });
}
catch(err){
	console.log(err.Message);
}


}, false);