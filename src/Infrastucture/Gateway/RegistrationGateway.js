import { registration } from "../../../DB/registration"

export default class RegistrationGateway {
  /**
   * 
   * @param {Object} person object of person contains name and age
   * @returns 
   */
  addRegistration (person) {
    registration.push(person)

    return registration
  }
  
  getRegistrations () {
    return registration
  }
}