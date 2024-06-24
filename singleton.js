//Example 1
let counter =0;

class Counter{
    getInstance(){
        return this;
    }

    getCounter(){
        return counter;
    }
    incrementCounter(){
        return ++counter;

    }
    decrementCounter(){
        return --counter;
    }


}

const counter1 = new Counter;
const counter2 = new Counter;

console.log(counter1.getInstance()===counter2.getInstance()); //False
counter1.incrementCounter;
console.log(counter1.getCounter()===counter2.getCounter()); //True



//Example 2
const Config =  {
    start : () => console.log("Started"),
    stop : () => console.log("Stop")
}

Object.freeze(Config);

Config.start();
Config.stop();

Config.name = "Albert"

console.log(Config)