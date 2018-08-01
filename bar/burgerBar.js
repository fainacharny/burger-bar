function BurgerBar(){
	function sleep(ms) {
	  return new Promise(resolve => setTimeout(resolve, ms));
	}

	const menu = {
		burgers: ['hamburger', 'cheeseburger', 'chicken', 'veggie'],
		sides: ['fries', 'salad', 'onionRings'],
		drinks: ['cocaCola', 'beer', 'water', 'sprite', 'lemonade']
	}

	this.runBurgerBar = async () => {
		for(let i=0; i<1000; i++){
			let order = new Order(menu.burgers[i % menu.burgers.length], menu.sides[i % menu.sides.length], menu.drinks[i % menu.drinks.length]);
			// let timeInLine = Math.floor(Math.random()*1000);
			// await sleep(timeInLine);
			order.order().then(result => {
				$('#orders').append(`<p>Order #${i} is ready. Total prep time: ${result.totalPrepTime}</p>`);
			});
			
		}
	}
}