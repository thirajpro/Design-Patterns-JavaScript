//Let's assume that thers's a Vehicle factory which manufactures Car, Motorcyle and Trucks.
//Creating Concrete factory for each vehicle type.
class Car {
    constructor(){
        this.name = "Car"
        this.wheels = 4
    }
    turnOn = () => console.log("Car starting")
        
    }

    class MotorCycle {
        constructor(){
            this.name = "MotorCycle",
            this.wheels = 2
        }
        turnOn = () =>{
            console.log("MotorCyle is Starting")
        }    
    }

    class Truck {
        constructor(){
            this.name = "Truck",
            this.wheels= 10
        }
        turnOn = () => {
            console.log("Truck is Starting")
        }
    }
    
     //Abstract factory will will work as a single point of interact with concrete factories of each vehicles.
    //It will call corresponding concrete factory through type parameter.
    const VehicleFactory ={
        createVehicle: function (type){
            switch(type){
                case "car":
                    return new Car();
                case "motorcycle":
                    return new MotorCycle();
                case "truck":
                    return new Truck();
                    default:
                        return null;
            }
        }
    }
    const car = VehicleFactory.createVehicle("car")
    const motorcycle = VehicleFactory.createVehicle("motorcycle")
    const truck = VehicleFactory.createVehicle("truck")

    console.log(car); // Car {turnOn: f, name: 'Car', wheels: 4}
    console.log(motorcycle) // MotorCycle {turnOn: f, name: 'MotoCycle', wheels: 2}
    console.log(truck) // Truck {turnOn: f, name: 'Truck', wheels: 10}