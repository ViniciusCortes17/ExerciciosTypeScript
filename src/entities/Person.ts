import Gender from "./Gender.js"

export class Person {
    name : String
    birth: Date
    gender : Gender

    constructor(name: String,birth: Date,gender: Gender){
        this.name = name
        this.birth = birth
        this.gender = gender
    }

}


export default Person