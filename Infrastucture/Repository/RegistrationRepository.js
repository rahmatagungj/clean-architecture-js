import RegistrationGateway from "../Gateway/RegistrationGateway";

export default class RegistrationRepository {
  constructor () {
    this.gateway = new RegistrationGateway()
  }

  savePerson (person) {
    if (!this.gateway.addRegistration(person)) return false

    const allPerson = this.gateway.getRegistrations()

    return allPerson
  }
}