//Observer Pattern: Subject notifies to all Observers tha if any changes have been done to the subject

function Channel1(){
    this.observer = [];//Observer Array, It pushes the functions
}

Channel1.prototype = {
    subscribe: function(fn)
     {
        this.observer.push(fn);
    },
    unSubscribe: function(removeFn)
    {
        this.observer = this.observer.filter(fn =>{
            if(fn != removeFn)
                return fn;
            
        })
    },
    fire: function(){
        this.observer.forEach(fn => {
            fn.call();
            
        });
    }
}

const channel = new Channel1();
function Observer1(){
    console.log("Observer 1 is firing...")
}

function Observer2(){
    console.log("Observer 2 is Firing...")
}
function Observer3()
{
    console.log("Observer 3 is firing...")
}
channel.subscribe(Observer1)//Observer1 is firing...
channel.subscribe(Observer2)//Observer2 is firing...
channel.subscribe(Observer3)//Observer3 is firing...
channel.unSubscribe(Observer2)//Observer2 is removing
channel.fire()//Call the array function