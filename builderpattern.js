//Builder Patterns: Create objects in Steps
//Exmample 01
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
    
    //Then let's call the builder fucntions passing the objects as parameters
    addSpeak(person1)
    person1.speak();

    addListen(person2)
    person2.listen();

    //Example 02: User Profile
    //UserProfile Concrete Class
    class UserProfile{
        constructor(builder){
            this.name = builder.name;
            this.age = builder.age;
            this.sex = builder.sex;
        }
        toString() {
            return `User Profile: Hi I am ${this.name}, and i am ${this.age} of age ${this.sex}`
        }
    }

    //Create UserProfile Builder
    class UserProfileBuilder{
        setName(name){
            this.name = name;
            return this;
        }
        setAge(age){
            this.age = age;
            return this;
        }
        setSex(sex){
            this.sex = sex;
            return this;
        }
        build(){
            return new UserProfile(this);
        }
    }

    //Using builder pattern
    const userProfile = new UserProfileBuilder()
        .setName("John")
        .setAge(31)
        .setSex("Male")
        .build();

    
    console.log(userProfile.toString()) //User Profile: Hi I am John, and i am 31 years of age Male
    