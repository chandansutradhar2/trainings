class Book{
title
author
year
price
}

const books= [
    {
      "title": "Everyday Italian",
      "author": "Giada De Laurentiis",
      "year": 2005,
      "price": 30
    },
    {
      "title": "Harry Potter",
      "author": "J K. Rowling",
      "year": 2005,
      "price": 29.99
    },
    {
      "title": "XQuery Kick Start",
      "author": [
        "James McGovern",
        "Per Bothner",
        "Kurt Cagle",
        "James Linn",
        "Vaidyanathan Nagarajan"
      ],
      "year": 2003,
      "price": 49.99
    },
    {
      "title": "Learning XML",
      "author": "Erik T. Ray",
      "year": 2003,
      "price": 39.95
    }
  ]

let testBook=new Book();
testBook.author="JK Rowing";
testBook.price=5677;
testBook.title="Harry Potter",
testBook.year=1990
console.log(typeof testBook);

console.log(books)