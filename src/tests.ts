import Person from "./entities/Person.js"

import Book from "./entities/Book.js"

import Document from "./entities/Document.js"

import Periodical from "./entities/Periodical.js"

import Gender from "./entities/Gender.js"


const person1 = new Person('Jhon Thomas Teller' , new Date(1940,5,5) , Gender.Male)
const person2 = new Person('J. R. R. Tolkien', new Date(18,1,3), Gender.Male)
const person3 = new Person('J. K. Rowling', new Date(1965,7,31), Gender.Female)
const person4 = new Person('Arthur Conan Doyle', new Date(1859,5,22), Gender.Male)

const Document1 = new Document('The Life and Death of SAM CROW', 'How the Sons of Anarchy Lost Their Way', new Date(2005,5,7), person1)
const Document2 = new Document('The Lord of the Rings', 'The Fellowship of the Ring', new Date(1954,7,29), person2)
const Document3 = new Document('Harry Potter', 'and the Sorcerer`s Stone', new Date(1997,6,26), person3)
const Document4 = new Document('Sherlock Holmes', 'A Study in Scarlet', new Date(1888,7,23), person4)

const periodical1 = new Periodical(12,1,4,Document1.title,Document1.subtitle,Document1.publishedAt,person1)
const periodical2 = new Periodical(12,1,4,Document2.title,Document2.subtitle,Document2.publishedAt,person2)
const periodical3 = new Periodical(12,1,4,Document3.title,Document3.subtitle,Document3.publishedAt,person3)
const periodical4 = new Periodical(12,1,4,Document4.title,Document4.subtitle,Document4.publishedAt,person4)

console.log(person1)
console.log(person2)
console.log(person3)
console.log(person4)
console.log(Document1)
console.log(Document2)
console.log(Document3)
console.log(Document4)
console.log(periodical1)
console.log(periodical2)
console.log(periodical3)
console.log(periodical4)
