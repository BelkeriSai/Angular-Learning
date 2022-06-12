//interface declaration
interface Car {
    make: number,
    color: string,
    enginerModel: number
}

//function definition
let createCar = (car: Car) => {
    //Create a car using the "car" parameter having structure/datatype/interface of "Car".
    console.log("The Car that is being create is of Make: " + car.make + ", Color:" + car.color + " & engineModel:" + car.enginerModel);
}

//funtion call
createCar({make:2021, color: "Blue", enginerModel: 55424574});