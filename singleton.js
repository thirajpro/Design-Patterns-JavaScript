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

console.log(counter1.getInstance()===counter2.getInstance())
counter1.incrementCounter;
console.log(counter1.getCounter()===counter2.getCounter())