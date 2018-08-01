importScripts('./workerpool.min.js');

async function order(burger, side, drink){
	var res = await fetch(`http://localhost:3000/order/${burger}-${side}-${drink}`);
	var totalPrepTime = await res.json()
	return totalPrepTime;
}

workerpool.worker({
  order: order
});