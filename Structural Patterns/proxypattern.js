//Proxy Pattern : 

function ForexCurrency(){
   
    this.getValue = function(currency)
    {
        console.log("Calling API...")
        switch(currency){
            case "USD":
            return 320
        case "LKR":
            return 100
        case "EURO":
            return 324
        }
        
    }
}

// const forex = new ForexCurrency();
// console.log(forex.getValue("USD"))
// console.log(forex.getValue("EURO"))

function ForexCurrencyProxy()
{
    this.api = new ForexCurrency()
    this.cache = {}
    this.getValue = function (currency)
    {
        if(this.cache[currency] == null){
            this.cache[currency] = this.api.getValue(currency)
        }
        return this.cache[currency]
    }
}

const proxy = new ForexCurrencyProxy();

console.log(proxy.getValue("USD"))
console.log(proxy.getValue("LKR"))
console.log(proxy.getValue("EURO"))
console.log(proxy.getValue("USD"))
console.log(proxy.getValue("USD"))
console.log(proxy.getValue("LKR"))

//Example 02: Assume that A book in a librabry need to lend through the librarian by presenting Library card.
//Create the Book Object.
class LibraryBook{
    constructor(title){
        this.title = title;
    }
    read(){
        console.log(`Readig Book: ${this.title}`)
    }
    
}
//Crating a Proxy object.
class Librarian{
 constructor(book,user){
    this.book = book;
    this.user = user;
 }
 read(){
    if(this.user.hasLibraryCard){
        console.log("Access granted. Logging access...");
            this.book.read();
    }
    else {
        console.log("Access denied, you need a library card to read this book")
    }
 }
}

//Usign Proxy
const book = new LibraryBook("JavScript");
const userWithCard = {hasLibraryCard:true};
const userWithoutCard = {hasLibraryCard:false};

const bookProxyWithCard = new Librarian(book,userWithCard);
const bookProxyWithoutCard2 = new Librarian(book,userWithoutCard)

bookProxyWithCard.read();
bookProxyWithoutCard2.read();