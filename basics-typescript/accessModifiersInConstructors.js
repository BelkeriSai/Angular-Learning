// Access Modifiers define if the classes are 1. Public, 2. Private or 3. Protected.
var CarMahindra = /** @class */ (function () {
    function CarMahindra(_fuel, _color, _engineModel) {
        //...And we also remove assignment of this.x=x.
        this._fuel = _fuel;
        this._color = _color;
        this._engineModel = _engineModel;
        // THIS is a simplified syntax of TS. it is similar to the one in accessModifiers.ts file.
    }
    CarMahindra.prototype.createCar = function () {
        console.log("The Car that is being create is of Fuel Type : " + this.fuel + ", Color: " + this._color);
    };
    CarMahindra.prototype.getFuel = function () {
        return this._fuel;
    };
    CarMahindra.prototype.setEngineModel = function (value) {
        if (value < 0) {
            throw new Error("Negative Value not allowed");
        }
        this._engineModel = value;
    };
    Object.defineProperty(CarMahindra.prototype, "fuel", {
        get: function () {
            return this._fuel;
        },
        set: function (value) {
            if (value.length < 0)
                throw new Error("Please provide a vaild input");
            this._fuel = value;
        },
        enumerable: false,
        configurable: true
    });
    return CarMahindra;
}());
var carMahindra1 = new CarMahindra('Diesel', 'Red');
var fuel1 = carMahindra1.getFuel(); // Indirect way of accessing the fuel field value using "GETTERS".
console.log(fuel1);
carMahindra1.setEngineModel(6543111); // Indirect way of setting a value of a field using "SETTERS"
carMahindra1.createCar();
console.log("-------------Alternate way below------------------");
fuel1 = carMahindra1.fuel; // Alternate way
carMahindra1.fuel = "Petrol"; //Alternate way
console.log("updated Fuel Type is " + carMahindra1.fuel);
carMahindra1.createCar();
