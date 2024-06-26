//Strategy pattern : supports to define a family of algorithm, encapsulates each one as a seperate class and make them interchangebale
//Strategy class
function DHL()
{
    this.calculate = package =>{
        return 300;
    }
}
function Fedex(){
    this.calculate = package =>{
        return 400;
    }
}
function Domex(){
    this.calculate=package =>{
        return 100;
    }
}
//Encapsulated algorithm class/function
function Shipping()
{
    this.company = "";
    this.setStrategy = company =>{
        this.company = company
    };
    this.calculate = package =>{
       return this.company.calculate(package);
    };
}
//Using strategy pattern
const dhl = new DHL();
const fedex = new Fedex();
const domex = new Domex();

const package ={from: "USA", to: "Sri Lanka", weight:1.5}

const shipping = new Shipping();
shipping.setStrategy(fedex);
console.log(shipping.calculate(package))