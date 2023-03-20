// Access Modifiers define if the classes are 1. Public, 2. Private or 3. Protected.

class CarMahindra {
    constructor (private _fuel: string, public _color: string, private _engineModel?: number){  // Added private/public keyword here in the constructor.
        //...And we also remove assignment of this.x=x.

        // THIS is a simplified syntax of TS. it is similar to the one in accessModifiers.ts file.
    }

    createCar() {
        console.log("The Car that is being create is of Fuel Type : " + this.fuel + ", Color: " + this._color);
    }

    getFuel() {                // This getter method so that the private fields in this class can be accessed by the objects outside the scope of this class.
        return this._fuel;
    }

    setEngineModel(value: number) {    // This Setter method helps in setting/ Updating the values of private fields.
        if(value < 0){
            throw new Error("Negative Value not allowed");
        }

        this._engineModel = value;
    }

    get fuel(){                  // Alternate way of writing a getter in typescript
        return this._fuel;
    }

    set fuel(value){     // Alternate way of writing a setter in typescript
        if(value.length < 0)
            throw new Error("Please provide a vaild input");

        this._fuel = value;
    }
}

let carMahindra1 = new CarMahindra('Diesel', 'Red');
 
let fuel1 = carMahindra1.getFuel();  // Indirect way of accessing the fuel field value using "GETTERS".

console.log(fuel1);

carMahindra1.setEngineModel(6543111); // Indirect way of setting a value of a field using "SETTERS"

carMahindra1.createCar();

console.log("-------------Alternate way below------------------");

fuel1 = carMahindra1.fuel; // Alternate way

carMahindra1.fuel = "Petrol"; //Alternate way

console.log("updated Fuel Type is " + carMahindra1.fuel);

carMahindra1.createCar();

// TO RUN this code use command - "tsc .\accessModifiersInConstructors.ts --target ES5"