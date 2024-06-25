function MacBook() {
    this.cost = function (){
        return 1000;
    };
    this.screenSize = function()
    {
        return 13.3;
    };
}

function Memory(macbook){
    let v = macbook.cost();
    macbook.cost = function()
    {
        return v + 75;
    };
}
function Engrave(macbook)
{
    let v = macbook.cost();
    macbook.cost = function()
    {
        return v + 50
    };
}
function Insurance(macbook){
    let v = macbook.cost();
    macbook.cost = function()
    {
        return v + 200;
    };
}

let mb = new MacBook();
Memory(mb);
Engrave(mb);
Insurance(mb);
console.log(mb.cost());
console.log(mb.screenSize())