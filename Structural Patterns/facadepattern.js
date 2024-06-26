//Facade pattern : Provides a convinient highl-level interface to a larger body of code by hiding complexity

//Creating Sub-Sytems of car
class Engine{
    on() {
        console.log("Engine is starting")
    }
    race(speed){
        console.log(`Card drives at ${speed}`)
    }
    swtichOff(){
        console.log("Engine is switching off")
    }
}

class ACSystem {
    on(){
        console.log("AC on")
    }
    level(adjust){
        console.log(`AC level is ${adjust}`)
    }
    off(){
        console.log("AC off")
    }
}

class DVDPlayer{
    on(){
        console.log("DVD Player is switching on")
    }
    playSong(song){
        console.log(`${song} is now playing`)
    }
    off(){
        console.log("Player going to standby mode")
    }
}
//Create a Facade
class Car {
    constructor(engine,acSystem,dvdPlayer){
        this.engine = engine;
        this.acSystem = acSystem;
        this.dvdPlayer = dvdPlayer;
    }

listenSong(song) 
{
    console.log("Get ready to listen a song...");
    this.dvdPlayer.on();
    this.dvdPlayer.playSong(song);
    this.engine.on();
    this.engine.race(10);
    this.acSystem.on();
    this.acSystem.level(10);

}

stopPlayingSong() 
{
    console.log("Shutting down the DVD Player");
    this.dvdPlayer.off();
    this.acSystem.off();
    this.engine.swtichOff();
}
}

//Use the Facade
const dvdPlayer = new DVDPlayer();
const engine = new Engine();
const acSystem = new ACSystem();

const car = new Car(engine,acSystem,dvdPlayer);

car.listenSong("Shape of You");
car.stopPlayingSong();