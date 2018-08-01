const express = require('express')
const app = express()

const prepTimes = {
	hamburger: 5000,
	cheeseburger: 6000,
	chicken: 4000,
	veggie: 3000,
	fries: 2000,
	salad: 1000,
	onionRings: 1500,
	cocaCola: 500,
	beer: 450,
	water: 400,
	sprite: 350,
	lemonade: 550
}

app.use(express.static('bar'))
app.use(express.static('betterBar'))

var count = 0;
app.get('/order/:burger-:side-:drink', (req, res) => {
	count++;
	var order = req.params;
	var totalPrepTime = prepTimes[order.burger] + prepTimes[order.side] + prepTimes[order.drink]
	setTimeout(() => {
		res.json({'totalPrepTime': totalPrepTime});
		count--;
	}, totalPrepTime);
})

var server = app.listen(3000, () => console.log('Kitchen server is listening on port 3000!'))

setInterval(() => {
	console.log(`Connections: ${count}`);
	if(count > 5){
		console.log('To many connections!');
		process.exit();
	}
}, 200);