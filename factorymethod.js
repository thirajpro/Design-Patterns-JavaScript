function Developer(name) {
    this.name = name;
    this.type = "Developer"
}

function QualityAssure(name) {
    this.name = name;
    this.type = "Quality Assure"
}

function Tester(name){
    this.name=name;
    this.type = "Tester"
}

function EmployeeFactory()
{
    this.create = (name,type) => {
        switch(type)
    {
        case 1:
            return new Developer(name);
            break;
        case 2:
            return new QualityAssure(name);
            break;

        case 3:
            return new Tester(name)
            break;
            
    }
    }
    
}

function say(){
    console.log("Hi there I am " + this.name + " and I am a " + this.type)
}

const employeeFactory = new EmployeeFactory();
const employe = [];

employe.push(employeeFactory.create("Chamith",1))
employe.push(employeeFactory.create("Thiraj",2))
employe.push(employeeFactory.create("Nanny",1))
employe.push(employeeFactory.create("Jack",3))

employe.forEach(emp =>{
    say.call(emp)
})