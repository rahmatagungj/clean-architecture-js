import Payload from "../Payload/Payload"
import RegistrationRepository from "../../Infrastucture/Repository/RegistrationRepository"
import RegistationAggregate from "../../Domain/PersonRegistration/Aggregate/RegistrationAggregate"

export default class RegistrationSpesification {
  constructor () {
    this.repository = new RegistrationRepository()
  }

  run (request) {
    const {name, age} = request
    let person = new RegistationAggregate(name, age)

    const resultPerson = this.repository.savePerson(person)

    if (resultPerson) return new Payload('success',resultPerson)

    return new Payload('error', 'Registration failed')
  }
}