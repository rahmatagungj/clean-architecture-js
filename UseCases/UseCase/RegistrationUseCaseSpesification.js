import Payload from "../Payload/Payload"
import RegistrationRepository from "../../Infrastucture/Repository/RegistrationRepository"
import RegistationAggregate from "../../Domain/PersonRegistration/Aggregate/RegistrationAggregate"

export default class RegistrationUseCase {
    run (request) {
      const {name, age} = request

      let repository = new RegistrationRepository()
      let person = new RegistationAggregate(name, age)

      repository.savePerson(person)

      // ini payload
      if (person) return new Payload('success',person)

      // ini payload
      return new Payload('error', 'Registration failed')
    }
}