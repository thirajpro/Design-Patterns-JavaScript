//Builder Patterns: Create objects in Steps

//Declaring objects
const person1 = {
    name: "jack",
    age: 20
}

const person2 = {
    name: "john",
    age: 25
}

//Add some fucntionalities 

const addSpeak = obj => 
    {
        obj.speak =() => console.log(`Now ${obj.name} can speak in english!`)
    }
const addListen = obj =>
    {
        obj.listen = () => console.log(`Now ${obj.name} can listen anything!`)
    }

    addSpeak(person1)
    person1.speak();

    addListen(person2)
    person2.listen();