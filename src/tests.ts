import Person from "./entities/Person.js"

import Book from "./entities/Book.js"

import Document from "./entities/Document.js"

import Periodical from "./entities/Periodical.js"

import Gender from "./entities/Gender.js"


const person1 = new Person('João' , new Date(1989,12,12) , Gender.Male)
const person2 = new Person('José', new Date(1985,3,14), Gender.Male)
const person3 = new Person('Maria', new Date(1994,5,6), Gender.Female)
const person4 = new Person('Marta', new Date(1979,8,21), Gender.Female)

const Document1 = new Document('titulo qualquer', 'subtitulo qualquer', new Date(2005,5,7), person1)
const Document2 = new Document('titulo qualquer', 'subtitulo qualquer', new Date(2001,6,8), person2)
const Document3 = new Document('titulo qualquer', 'subtitulo qualquer', new Date(20017,7,17), person3)
const Document4 = new Document('titulo qualquer', 'subtitulo qualquer', new Date(1997,1,28), person4)

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
