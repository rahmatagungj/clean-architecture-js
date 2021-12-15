class Person{
  constructor (name, age) {
    this.name = name
    this.age = age
  }
}

export default class RegistationAggregate {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  
  getPerson () {
    const person = new Person(this.name, this.age)
    
    return person
  }
}
