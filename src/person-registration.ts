
import Person from "./entities/Person.js"
import Gender from "./entities/Gender.js"
let name = document.querySelector<HTMLInputElement>('#name')!
const birth = document.querySelector<HTMLDataElement>('#birth')!
const gender = document.querySelector<HTMLSelectElement>('#gender')!
const form = document.querySelector<HTMLFormElement>('form')!
const answer = document.querySelector<HTMLDivElement>('#answer')!
const table = document.querySelector<HTMLTableElement>('table')!
const bttfilter = document.querySelector<HTMLFormElement>('#formFilter')!
const clearFilter = document.querySelector<HTMLFormElement>('#clearFilter')!
const filterPersons = document.querySelector<HTMLInputElement>('#filterPersons')!

let personsLocalStorage: Array<Person> = JSON.parse(localStorage.getItem("persons") || '{}')
let names = personsLocalStorage.map(p=> p.name) 

type ObjectWithNome = {name: string}
const sortName = (a: ObjectWithNome , b: ObjectWithNome) => a.name.localeCompare(b.name)
const filterName = (text: Person) => text.name.includes(filterPersons.value)
//const filterName = (obj: Person) => obj.name === filterPersons.value
//persons.filter(filterName)
//const filterName = (text: Person) => text.name.toUpperCase().includes(filterPersons.value) 
//const namesSorted = [...names].sort()
//=== filterPersons.value
//toUpperCase().includes(filterPersons.value) 
//const namesF = names.filter(filterName)



const persons: Person[] = []
showPersons()
name.focus()

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





console.log(names)
// let p = document.querySelector<HTMLParagraphElement>('#listpersons')


//     if (!p) {
      
//       for(let i = 0; i < namesSorted.length;i++){
//         p = document.createElement('p')
//         p.id = 'listpersons'
//         p.innerText = namesSorted[i]
//         document.body.append(p)
//       }
      
     
      
//     }


  

    bttfilter.addEventListener('submit', (e: Event) => {
      e.preventDefault()

      filter()
      
    })
    

    clearFilter.addEventListener('submit', (e: Event) => {
      e.preventDefault()
    

        showPersons()
    })



form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    
     let valueName  = capitalize(trimAll(name.value))
     
  
    if (!valueName) {
      answer.innerText = 'O campo Nome é obrigatório!'
      name.focus()
      return
    }
  
    const regexNome = /\w+\s\w+/g
  
    if (!regexNome.test(valueName)) {
      answer.innerText = 'Informe seu nome completo!'
      name.focus()
      return
    }
  
  
    if (!birth.value) {
      answer.innerText = 'O campo Nascimento é obrigatório!'
      return
    }
  
    const birthDate = new Date(`${birth.value}T00:00:00`)
    console.log(birth.value)
  
    if (Date.now() - Number(birthDate) < 0) {
      answer.innerText = 'O nascimento deve ter ocorrido no passado!'
      birth.focus()
      return
    }
  
    if (!gender.value) {
      answer.innerText = 'O campo Sexo é obrigatório!'
      gender.focus()
      return
    }

    try {
      let birthDate = new Date(birth.value)

      const person = new Person(
          name.value = valueName,
          birthDate,
          gender.value === 'f' ? Gender.Female: Gender.Male
      )

      persons.push(person)

      localStorage.setItem('persons', JSON.stringify(persons))
  }
      catch (error: any) {
      answer.innerText = "Ocorreu algum erro."
      return
  }

  if (persons) {
     answer.innerText = `${valueName} Cadastrado com Sucesso!`
     refresh()
  
     setTimeout(refresh,1500)
     
  }

  name.value = ''
  birth.value = ''
  gender.value = ''
})

function refresh(){
  window.location.reload()
 }

function showPersons() {
  if (localStorage.getItem('persons')) {
      const birthDate = JSON.parse(localStorage.getItem('persons')!)

      persons.splice(0)

      for (const item of birthDate) {
          persons.push(new Person(item.name,item.birth,item.gender))

          
      }
  }

  let aux = [...persons].sort(sortName) 

  let lines = ''
  for (const person of aux) {


   lines += `
      <tr>
        <td>${ (person as Person).name }</td>
      </tr>
    `
  }  
  table.className = 'table table-borderless'
  table.innerHTML = `
    <thead>
      <tr>
        <th>Nome</th>
      </tr>
    </thead>
    <tbody>
      ${lines}
    </tbody>
  `

}

function filter(){
  if (localStorage.getItem('persons')) {
    const birthDate = JSON.parse(localStorage.getItem('persons')!)

    persons.splice(0)

    for (const item of birthDate) {
        persons.push(new Person(item.name,item.birth,item.gender))

        
    }
}

let aux = persons.filter(filterName)

  let lines = ''
  for (const pessoa of aux) {
 
 
   lines += `
      <tr>
        <td>${ (pessoa as Person).name }</td>
      </tr>
    `
  }  
  table.className = 'table table-borderless'
  table.innerHTML = `
    <thead>
      <tr>
        <th>Nome</th>
      </tr>
    </thead>
    <tbody>
      ${lines}
    </tbody>
  `


}




