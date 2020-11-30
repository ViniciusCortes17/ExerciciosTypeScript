
import Person from "./entities/Person.js"
import Gender from "./entities/Gender.js"
const name = document.querySelector<HTMLInputElement>('#name')!
const birth = document.querySelector<HTMLDataElement>('#birth')!
const gender = document.querySelector<HTMLSelectElement>('#gender')!
const form = document.querySelector<HTMLFormElement>('form')!
const answer = document.querySelector<HTMLDivElement>('#answer')!

const persons: Person[] = []
showPersons()
name.focus()

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
  
     const valueName = name.value.trim()
  
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
          name.value,
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
  }

  name.value = ''
  birth.value = ''
  gender.value = ''
})

function showPersons() {
  if (localStorage.getItem('persons')) {
      const birthDate = JSON.parse(localStorage.getItem('persons')!)

      persons.splice(0)

      for (const item of birthDate) {
          persons.push(new Person(item.name,item.birth,item.gender))
      }
  }
}

