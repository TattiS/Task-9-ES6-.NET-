// Create class ImprovedFighter
import {Fighter} from 'fighter.js'

export class ImprovedFighter extends Fighter{
	
	doubleHit(enemy, point){

		let doublePoints = (x)=> x*2;

		super.hit(enemy,doublePoints(point));
	}
}