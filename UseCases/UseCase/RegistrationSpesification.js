import Payload from "../Payload/Payload"
import RegistrationRepository from "../../Infrastucture/Repository/RegistrationRepository"
import RegistationAggregate from "../../Domain/PersonRegistration/Aggregate/RegistrationAggregate"

export default class RegistrationSpesification {
    run (request) {
      const {name, age} = request

      let repository = new RegistrationRepository()
      let person = new RegistationAggregate(name, age)

      const resultPerson = repository.savePerson(person)

      if (resultPerson) return new Payload('success',resultPerson)

      return new Payload('error', 'Registration failed')
    }
}