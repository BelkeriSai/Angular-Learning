class CarBMW {
    fuel: string;
    color: string;
    engineModel: number;

    constructor (fuel: string, color: string, engineModel?: number){  // the ? "Question Mark" added near engineModel makes the parameter Optional. Try removing the error and check the error at line 17.
        this.fuel = fuel;
        this.color = color;
        this.engineModel = engineModel;
    }

    createCar() {
        console.log("The Car that is being create is of Fuel Type : " + this.fuel + ", Color: " + this.color);
    }
}

let car1 = new CarBMW('Diesel', 'Pink');
car1.createCar();