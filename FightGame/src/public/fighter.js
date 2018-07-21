// Create class Fighter
class Fighter{
	constructor(name, power, health){
		this.name = name;
		this.power = power;
		this.health = health;
	}

	hit(enemy, point)
	{
		let damage = point*this.power;
		enemy.setDamage(damage);
	}

	setDamage(damage){
			this.health = this.health - parseInt(damage);
			console.log("Health of "+this.name+" is equal "+this.health);
			
			
	}

	knockout()
	{
		var promise = new Promise((resolve, rejected)=> {
				setTimeout(()=>{
					console.log("For "+this.name+" time is over.");
					resolve(this.name + " was knocked out.");
				}, 500);
		});
		return promise;
	}

	get fighterHealth()
	{
		return this.health;
	}
}
