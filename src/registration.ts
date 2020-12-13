
// import Person from "./entities/Person.js"
import Book from "./entities/Book.js"
import Periodical from "./entities/Periodical.js"
import Person from "./entities/Person.js"
// import Document from "./entities/Document.js"
// import Periodical from "./entities/Periodical.js"
//import Gender from "./entities/Gender.js"

const form = document.querySelector<HTMLFormElement>('form')!
const select = document.querySelector<HTMLSelectElement>('#select')!
const divBook = document.getElementById('book')!
const divEqual = document.querySelector<HTMLDivElement>('#equal')!
const divPeriodical = document.querySelector<HTMLDivElement>('#periodical')!

const isbn = document.querySelector<HTMLInputElement>('#isbn')!
const edition = document.querySelector<HTMLInputElement>('#edition')!
const volumeBook = document.querySelector<HTMLInputElement>('#volumeBook')!
const title = document.querySelector<HTMLInputElement>('#title')!
const subtitle = document.querySelector<HTMLInputElement>('#subtitle')!
const publishedAt = document.querySelector<HTMLInputElement>('#publishedAt')!
const issn = document.querySelector<HTMLInputElement>('#issn')!
const volumePeriodical = document.querySelector<HTMLInputElement>('#volumePeriodical')!
const issue = document.querySelector<HTMLInputElement>('#issue')!
const author = document.querySelector<HTMLSelectElement>('#author')!
const answer = document.querySelector<HTMLDivElement>('#answer')!


function refresh(){
    window.location.reload()
   }

const capitalize = (text: string) => {
    const words = text.split(' ')
  
    for (let i = 0; i < words.length; i++) {
      words[i] =
        words[i].substr(0, 1).toUpperCase() +
        words[i].substr(1).toLowerCase()
    }
  
    return words.join(' ')
  }
  
  const trimAll = (text: string) => text.trim().replace(/\s+/g, ' ')
  



let personsLocalStorage: Array<Person> = JSON.parse(localStorage.getItem("persons") || '{}')
let names = personsLocalStorage.map(p=> p.name) 

let arrTitle: Array<Document> = JSON.parse(localStorage.getItem("books") || '{}')
let titles = arrTitle.map(p=> p.title)




console.log(arrTitle)
let p = document.querySelector<HTMLParagraphElement>('#listtitle')
const titleSorted = [...titles].sort()

    if (!p) {
      
      for(let i = 0; i < titleSorted.length;i++){
        p = document.createElement('p')
        p.id = 'listtitle'
        p.innerText = titleSorted[i]
        document.body.append(p)
      }
    }

    


select.addEventListener('change',(e: Event) => {
   e.preventDefault() 

    if(select.value == 'b'){
      divBook.hidden = false
      divEqual.hidden = false
      divPeriodical.hidden = true
      getName()

    }else if(select.value == 'p'){
      divPeriodical.hidden = false
      divEqual.hidden = false
      divBook.hidden = true
      getName()
    }else{
      divPeriodical.hidden = true
      divEqual.hidden = true
      divBook.hidden = true
      getName()
  
  } 
  })
    
      
 
  const books: Book[] = []
  const periodicals: Periodical[] = []
  

  form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    var author1 = author.value.trim()

    var person1 = personsLocalStorage[parseInt(author1)]

    title.value = capitalize(trimAll(title.value))

    if(select.value == 'b'){
 
     if(!isbn.value){
         answer.innerText = 'O campo isbn é obrigatorio'
         isbn.focus()
         return
     }
 
     if(!edition.value){
         answer.innerText = 'O campo edition é obrigatorio'
         edition.focus()
         return
     }
 
     if(!volumeBook.value){
         answer.innerText = 'O campo volume é obrigatorio'
         volumeBook.focus()
         return
     }
 
     if(!title.value){
         answer.innerText = 'O campo title é obrigatorio'
         title.focus()
         return
     }
 
     if(!subtitle.value){
         answer.innerText = 'O campo subtitle é obrigatorio'
         subtitle.focus()
         return
     }
 
     if(!publishedAt.value){
         answer.innerText = 'O campo publishedAt é obrigatorio'
         publishedAt.focus()
         return
     }
 
     if(!author.value){
         answer.innerText = 'O campo author é obrigatorio'
         author.focus()
         return
     }
    
 
 
 try {
 
   const book = new Book(
       parseInt(isbn.value),
       parseInt(volumeBook.value),
       parseInt(edition.value),
       title.value,
       subtitle.value,
       parseInt(publishedAt.value),
       person1 )
 
   books.push(book)
 
   localStorage.setItem('books', JSON.stringify(books))

 }
   catch (error: any) {
   answer.innerText = "Ocorreu algum erro."
   
 }
 
 if (books) {
  answer.innerText = `${title.value} Cadastrado com Sucesso!`
 
    setTimeout(refresh,1500)

 }

    }else if(select.value == 'p')


    

    if(!title.value){
        answer.innerText = 'O campo title é obrigatorio'
        title.focus()
        return
    }

    if(!subtitle.value){
        answer.innerText = 'O campo subtitle é obrigatorio'
        subtitle.focus()
        return
    }

    if(!publishedAt.value){
        answer.innerText = 'O campo publishedAt é obrigatorio'
        publishedAt.focus()
        return
    }

    if(!author.value){
        answer.innerText = 'O campo author é obrigatorio'
        author.focus()
        return
    }
    if(!volumePeriodical.value){
        answer.innerText = 'O campo volume é obrigatorio'
        volumePeriodical.focus()
        return
    }

    if(!issn.value){
        answer.innerText = 'O campo issn é obrigatorio'
        issn.focus()
        return
    }

    if(!issue.value){
        answer.innerText = 'O campo issue é obrigatorio'
        issue.focus()
        return
    }


try {

  const periodical = new Periodical(
      parseInt(issn.value),
      parseInt(volumePeriodical.value),
      parseInt(issue.value),
      title.value,
      subtitle.value,
      parseInt(publishedAt.value),
      person1 )

  periodicals.push(periodical)

  localStorage.setItem('periodicals', JSON.stringify(periodicals))

}
  catch (error: any) {
  answer.innerText = "Ocorreu algum erro."
  
}

if (periodicals) {
 answer.innerText = `${issn.value} Cadastrado com Sucesso!`

  setTimeout(refresh,1500)

}

})

function getName(){
  for (let i = 0; i < names.length; i++) {

      author.add(new Option(names[i].toString(), i.toString()));
      
  }
}