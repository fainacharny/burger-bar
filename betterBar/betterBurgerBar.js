function BetterBurgerBar(){
	let maxWorkers = 4;
	let workerPath = 'kitchenWorker.js';
	var pool = workerpool.pool('./kitchenWorker.js', {maxWorkers: maxWorkers});

	const menu = {
		burgers: ['hamburger', 'cheeseburger', 'chicken', 'veggie'],
		sides: ['fries', 'salad', 'onionRings'],
		drinks: ['cocaCola', 'beer', 'water', 'sprite', 'lemonade']
	}

	this.runBurgerBar = async () => {
		for(let i=0; i<1000; i++){
			let timeInLine = Math.floor(Math.random()*1000);
			pool.exec('order', [menu.burgers[i % menu.burgers.length], menu.sides[i % menu.sides.length], menu.drinks[i % menu.drinks.length]])
			.then(result =>{
				$('#orders').append(`<p>Order #${i} is ready. Total prep time: ${result.totalPrepTime}</p>`);
			});
			
		}
	}
}

let burgerBar = new BetterBurgerBar();
burgerBar.runBurgerBar();