// Book Store
let books = [
    {
        title: "It End With Us",
        author: "Colleen Hoover",
        pageNumber: 376,
        isAvailable: true,
    },
    {
        title: "The four Agreement",
        author: "Amber-Allen",
        pageNumber: 160,
        isAvailable: true,
    },
    {
        title: "Life on the refrigerator door",
        author: "Amber-Allen",
        pageNumber: 240,
        isAvailable: true,
    },
    {
        title: "The sun and her flowers",
        author: "Colleen Hoover",
        pageNumber: 256,
        isAvailable: true,
    },
    {
        title: "The Notebook",
        author: "Amber-Allen",
        pageNumber: 214,
        isAvailable: true,
    }
]




//iterate through the books array and print out the title, author, and number of pages for each book.
console.log("-----------------------------------");
console.log("The Booklist :");
console.log("-----------------------------------");

for (i=0 ; i< books.length ; i++){
    title= books[i].title; 
    author= books[i].author; 
    pageNumber= books[i].pageNumber;  
    console.log(`Title: ${title} \n Author: ${author} \n Number of pages: ${pageNumber} \n`)  
}





//Book borrowing
function borrowBook (title , name){

    //Store the obj values of the book
    let book = books.find(function(value) {
        return value.title == title
    })

    //Check the availability & Perform the action
    if(book == undefined){
        console.log("\n-----------------------------------");
        console.log("This book is not in the library");
        console.log("-----------------------------------");
    }
    else if(book.isAvailable == true){
        console.log("\n-----------------------------------");
        console.log(` The book is available! `);
        console.log("-----------------------------------");
        console.log(`Book information Before borrowing:`);
        console.log(book);

        //update the book's availability to false
        book.isAvailable = false;

        //add a new property to the book object called "borrower" with the value of the borrower's name.
        let index = books.indexOf(book)
        books[index].borrower=(name)
        
        console.log(`Book information after borrowing:`);
        console.log(book);
    }
    else{
        console.log("\n-----------------------------------");
        console.log("This book is not available :( ");
        console.log("-----------------------------------");
    }
    
} 




//book return
function returnBook(title){
    //Store the obj values of the book
    let book = books.find(function(value) {
        return value.title == title
    })

    //check if the book has a "borrower" property
    if(book == undefined){
        console.log("\n-----------------------------------");
        console.log("This book is not in the library");
        console.log("-----------------------------------");
    }
    else if(book.borrower != undefined){

        console.log("\n-----------------------------------");
        console.log(`The book has been borrowed! `);
        console.log("-----------------------------------");
        console.log(`Book information Before return:`);
        console.log(book);

        //update the book's availability to true
        book.isAvailable = true;
        //remove the "borrower" property.
        delete book.borrower;
        console.log(`Book information after return:`);
        console.log(book);
    }
    else{
        console.log("\n-----------------------------------");
        console.log(`the book was never borrowed.`);
        console.log("-----------------------------------");
    }
}




//Test functions
borrowBook("Life on the refrigerator door" , "Yasser")
borrowBook("It End With Us" , "Shatha")
borrowBook("It End With Us" , "Reema")
borrowBook("Hi" , "Lana")

returnBook("It End With Us")
returnBook("The Notebook")
returnBook("Hi")




//iterate through the books array and print out the title, author, number of pages, and borrower (if any) for each book.
console.log("\n-----------------------------------");
console.log("The Booklist with borrowes (if any) :");
console.log("-----------------------------------");
for (i=0 ; i< books.length ; i++){
    title= books[i].title
    author= books[i].author
    pageNumber= books[i].pageNumber
    borrower= books[i].borrower

    console.log(`\n Title: ${title} \n Author: ${author} \n Number of pages: ${pageNumber}`)  

    if(books[i].borrower != undefined){
        console.log(` Borower: ${borrower}`);
    }
}





//addBook 
title= "The Old Man and the Sea"
author= "Ernest Hemingway"
pageNumber= "127"
addBook(title , author , pageNumber  )

function addBook(title , author , pageNumber  ){
    //adds it to the books array: 
    let newBook = {title : title , author: author , pageNumber: pageNumber , isAvailable: true,}
    books.push(newBook);
}

console.log("\n-----------------------------------");
console.log("The Booklist after add new book :");
console.log("-----------------------------------");
console.log(books);





//"searchBook"
function searchBook(authorName){
    let authorBooks = books.filter(function(value) {
        return value.author == authorName;
    })

    console.log("\n-----------------------------------");
    console.log(`The Booklist of the author: ${authorName}`);
    console.log("-----------------------------------");
    console.log(authorBooks);
}




//Test searchBook function
searchBook("Colleen Hoover")
searchBook("Amber-Allen")

