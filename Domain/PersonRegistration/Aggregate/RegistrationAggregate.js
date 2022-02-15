class Person{
  /**
   * 
   * @param {String} name name of person 
   * @param {Number} age age of person
   */
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
  /**
   * 
   * @param {String} name name of person 
   * @param {Number} age age of person
   */
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  getRegistration () {
    const person = new Person(this.name, this.age)

    return person.getPerson()
  }
}
