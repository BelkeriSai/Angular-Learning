// Access Modifiers define if the classes are 1. Public, 2. Private or 3. Protected.


class CarTata {
    private fuel: string; // Using Access modifier here. Try removing the keyword private here and the error at line no 21 goes away,
    color: string;
    engineModel: number;

    constructor (fuel: string, color: string, engineModel?: number){ 
        this.fuel = fuel;
        this.color = color;
        this.engineModel = engineModel;
    }

    createCar() {
        console.log("The Car that is being create is of Fuel Type : " + this.fuel + ", Color: " + this.color);
    }
}

let carTata1 = new CarTata('Diesel', 'Pink');
//carTata1.fuel = "Pertrol";
carTata1.createCar();