// create async function fight
async function fight(f, i, [...points]){
	console.log("Fight starts");
	
	var div = document.createElement('div');
			div.id = "game";
			div.innerHTML = "<strong>Fight starts!</strong>";
	document.getElementById("app").appendChild(div);

	let gen = generatePoint(points);
try{
	
	do{
		if(getMillisecondsToday()%2 ===0)
		{
			let point = gen.next();
			
			if(point.done)
			{
				break;
			} else if(point != 0/0)
			{
				f.hit(i, point.value);
				console.log(f.name + " has hit.");

				var p = document.createElement('p');
					p.className = "f1";
					p.innerHTML = f.name + " has hit.";
					document.getElementById("game").appendChild(p);
			}
		}
		else
		{
			let point = gen.next();

			if(point.done)
			{
				break;
			} else if(point != 0/0)
			{
				i.doubleHit(f, point.value);
				console.log(i.name + " has hit.");

				var p = document.createElement('p');
					p.innerHTML = i.name + " has hit.";
					document.getElementById("game").appendChild(p);
			}
			
		}
	}
	while(f.fighterHealth >0 && i.fighterHealth >0)

	if(f.fighterHealth<=0){
		let responseF = await f.knockout().then((m)=>{
			var p = document.createElement('p');
					p.innerHTML = "<strong>"+m+"</strong><p><strong>"+i.name+"</strong> is a winner!</p>";
					document.getElementById("game").appendChild(p);
		});
		return responseF;
	}
	else if(i.fighterHealth<=0)
	{
		let responseI = await i.knockout().then((m)=>{
			var p = document.createElement('p');
					p.innerHTML = "<strong>"+m+"</strong><p><strong>"+f.name+"</strong> is a winner!</p>";
					document.getElementById("game").appendChild(p);
		});
		return responseI;
	}	
	else{
			if(f.fighterHealth == i.fighterHealth)
			{
				console.log("It's a drawn game.");
				console.log(f , i);
				var p = document.createElement('p');
					p.innerHTML = "It's a drawn game.";
					document.getElementById("game").appendChild(p);
			}
			else if (f.fighterHealth < i.fighterHealth)
			{
				console.log(i.name + " is a winner!");
				console.log(i , f);
				var p = document.createElement('p');
					p.innerHTML = "<strong>"+i.name+"</strong> is a winner!";
					document.getElementById("game").appendChild(p);
			}
			else
			{
				console.log(f.name + " is a winner!");
				console.log(f , i);
				var p = document.createElement('p');
					p.innerHTML = "<strong>"+f.name+"</strong> is a winner!";
					document.getElementById("game").appendChild(p);
			}
	}
		
	}catch(error){
		alert(error);
	}
}

function* generatePoint ( items){

	for (var i =0; i < items.length; i++) {
		
		yield items[i];
	}
	
}

function getMillisecondsToday() {
  var d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds()*1000 +d.getMilliseconds();
}