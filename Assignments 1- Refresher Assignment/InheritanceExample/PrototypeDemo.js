function Vehical(name, model, price, color) {
	this.name = name;
	this.model = model;
	this.price = price;
	this.color = color;
}

Vehical.prototype.desc = function() {
	return this.name + ", " + this.model + ", " + this.price 
};

var myVehicle = new Vehical("Audi", "2018 A4 Sedan", '$36000', "black");
console.log("The description of car -");
console.log(myVehicle.desc());