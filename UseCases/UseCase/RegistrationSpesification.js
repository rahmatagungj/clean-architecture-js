import Payload from "../Payload/Payload"
import RegistrationRepository from "../../Infrastucture/Repository/RegistrationRepository"
import RegistationAggregate from "../../Domain/PersonRegistration/Aggregate/RegistrationAggregate"

export default class RegistrationSpesification {
  constructor () {
    this.repository = new RegistrationRepository()
  }

  /**
   * 
   * @param {*} request all data came from controller
   * @returns 
   */
  run (request) {
    const {name, age} = request
    let person = new RegistationAggregate(name, age)

    let registration = person.getRegistration()

    const resultPerson = this.repository.savePerson(registration)

    if (resultPerson) return new Payload('success',resultPerson)

    return new Payload('error', 'Registration failed')
  }
}