let ALL_REGISTRATION = []

export default class RegistrationGateway {
  addRegistration (person) {
    ALL_REGISTRATION.push(person)

    return ALL_REGISTRATION
  }
  
  getRegistrations () {
    return ALL_REGISTRATION
  }
}