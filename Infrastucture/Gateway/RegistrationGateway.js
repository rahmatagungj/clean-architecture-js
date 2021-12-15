let ALL_REGISTRATION = []

export default class RegistrationGateway {
  addRegistration (person) {
    ALL_REGISTRATION.push(person)
  }
  
  getRegistrations () {
    return ALL_REGISTRATION
  }
}