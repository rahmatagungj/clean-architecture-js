import { registration } from "../../DB/registration"

export default class RegistrationGateway {
  addRegistration (person) {
    registration.push(person)

    return registration
  }
  
  getRegistrations () {
    return registration
  }
}