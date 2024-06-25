function Tree(name, height, sciencetificName){
    this.name = name;
    this.height = height;
    this.sciencetificName = sciencetificName;
    this.getData = function() {
        return this.name + ' has a height of ' + this.height + 'm,' + " sciencetific name is " + this.sciencetificName;
    };
}

const coconut = new Tree("Coconut", 10 ,"Cocos nucifera")
console.log(coconut.getData())
