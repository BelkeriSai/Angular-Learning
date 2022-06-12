// Access Modifiers define if the classes are 1. Public, 2. Private or 3. Protected.
var CarTata = /** @class */ (function () {
    function CarTata(fuel, color, engineModel) {
        this.fuel = fuel;
        this.color = color;
        this.engineModel = engineModel;
    }
    CarTata.prototype.createCar = function () {
        console.log("The Car that is being create is of Fuel Type : " + this.fuel + ", Color: " + this.color);
    };
    return CarTata;
}());
var carTata1 = new CarTata('Diesel', 'Pink');
//carTata1.fuel = "Pertrol";
carTata1.createCar();
