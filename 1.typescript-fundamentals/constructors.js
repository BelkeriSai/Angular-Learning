var CarBMW = /** @class */ (function () {
    function CarBMW(fuel, color, engineModel) {
        this.fuel = fuel;
        this.color = color;
        this.engineModel = engineModel;
    }
    CarBMW.prototype.createCar = function () {
        console.log("The Car that is being create is of Fuel Type : " + this.fuel + ", Color: " + this.color);
    };
    return CarBMW;
}());
var car1 = new CarBMW('Diesel', 'Pink');
car1.createCar();
