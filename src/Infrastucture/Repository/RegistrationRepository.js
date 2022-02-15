import RegistrationGateway from "../Gateway/RegistrationGateway";

export default class RegistrationRepository {
  constructor () {
    this.gateway = new RegistrationGateway()
  }

  savePerson (person) {
    /**
     * 
     * @param {Object} person object of person contains name and age
     * @returns 
     */
    if (!this.gateway.addRegistration(person)) return false

    const allPerson = this.gateway.getRegistrations()

    return allPerson
  }
}