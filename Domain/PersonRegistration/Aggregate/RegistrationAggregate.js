class Person{
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  getPerson () {
    const person = { name: this.name, age: this.age }
    
    return person
  }
}

export default class RegistationAggregate {
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  getRegistration () {
    const person = new Person(this.name, this.age)

    return person.getPerson()
  }
}
