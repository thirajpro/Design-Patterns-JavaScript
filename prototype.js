//Prototype Pattern: Objects with shared behaviors and it want to avpoid overhead of recreating of those behaviors.
//Example 01
//Creating a prototype object
const person1 ={
    talk:()=>{
        return "I can talk"},
    swim:()=>
        {
            return "I can swim"
        }
    }

//Creating an another object
const person2 ={
    play:()=>
        {
            return "I can play"
        },
    run:()=>{
        return "I can run"
    }
}
//Set the prototype of person2 from person1
Object.setPrototypeOf(person2,person1)

//Read the property using getPrototypeOf
console.log(Object.getPrototypeOf(person2))//Person2 has assigned new property of person1

console.log(person1.talk())//I can talk
console.log(person2.run())//I can run
console.log(person2.play())//I can play

//Example 2:Using Object.create 

class Prototype{
    counter = 0;
    setCounter(number){
        this.counter=number
    }
    getCounter(){
        return this.counter;
    }
    clone(){
        return Object.create(this)
    } 
}

const prototype = new Prototype();
prototype.setCounter(10)
const clonedPrototype = prototype.clone();
clonedPrototype.getCounter()//10
console.log(clonedPrototype.getCounter())

prototype.setCounter(20)
console.log(clonedPrototype.getCounter())//20