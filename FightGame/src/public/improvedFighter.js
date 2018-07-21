// Create class ImprovedFighter
class ImprovedFighter extends Fighter{
	
	doubleHit(enemy, point){

		let doublePoints = (x)=> x*2;

		super.hit(enemy,doublePoints(point));
	}
}