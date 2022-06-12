var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.createCar = function () {
        console.log("The Car that is being create is of Fuel Type : " + this.fuel + ", Color: " + this.color + " & engineModel: " + this.enginerModel);
    };
    return Car;
}());
var car1 = new Car();
car1.fuel = "Pertrol";
car1.color = "Blue";
car1.enginerModel = 5512824;
car1.createCar();
