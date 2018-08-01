function Order(burger, side, drink){
	this.burger = burger;
	this.side = side;
	this.drink = drink;

	this.order = async () => {
		var res = await window.fetch(`/order/${this.burger}-${this.side}-${this.drink}`);
		var totalPrepTime = await res.json()
		return totalPrepTime;
	}
}