import RegistrationGateway from "../Gateway/RegistrationGateway";

export default class RegistrationRepository {
  savePerson (person) {
    const gateway = new RegistrationGateway()

    if (!gateway.addRegistration(person)) return false

    const allPerson = gateway.getRegistrations()

    return allPerson
  }
}