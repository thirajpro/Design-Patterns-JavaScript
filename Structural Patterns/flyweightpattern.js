//FLyweight Pattern: this pattern uses inefficient, slow and repetitive situations of code.Instrisic and Extrinsic informations,
//Moreover Instrinsic : internal methods and properties can replace with single object, objects create using Factory Method
//Extrinsic Info: these type of methods and properties are being removed from the object and use a handler to manage those info.

//Create Single object
class Book{
    constructor(title,author,publisher,isbn)
    {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.isbn = isbn
    }
}

//Factory Method uses to create books.
const Bookfactory = (function(){
    const existingBooks = {};
    return {
        createBook: function(title,author,publisher,isbn){
            const existingBook =existingBooks[isbn];
            if(existingBook){
                return existingBook;
            }else {
                const book = new Book(title,author,publisher,isbn);
                existingBooks[isbn] = book;
                return book;
            }
        }
    }
});

//Flyweihght approach to manage extrinsic props and methods.
const BookRecordManager = (function(){
    const bookRecordDatabase = {};
    return {
        addBookRecord: function (id, title,author,publisher,checkOutDate,checkOutMember, dueReturnDate, availability){
            const book = Bookfactory.createBook(title,author,publisher,isbn);
            bookRecordDatabase[id]={
                checkOutMember:checkOutMember,
                checkOutDate:checkOutDate,
                dueReturnDate:dueReturnDate,
                availability:availability,
                book:book,

            };
        },
        updateCheckOutStatus:function(bookID,newStatus,checkOutDate,checkOutMember,newReturnDate){
            const record = bookRecordDatabase[bookID];
            record.availability =newStatus;
            record.checkOutDate = checkOutDate;
            record.checkOutMember=checkOutMember;
            record.dueReturnDate =newReturnDate;
        },
        extendCheckOutPeriod: function (bookID, newReturnDate){
            bookRecordDatabase[bookID].dueReturnDate = newReturnDate;

        },
        isPastDue:function (bookID){
            const currentDate = new Date();
            return currentDate.getTime()>Date.parse(bookRecordDatabase[bookID].dueReturnDate)
        }
     
    };
});

const book1 = new Book("JacaScriupt","Thiraj","Malk",1234455);

book1.createBook(book1)

console.log(book1)