import RegistrationGateway from "../Gateway/RegistrationGateway";

export default class RegistrationRepository {
  savePerson (person) {
    let gateway = new RegistrationGateway()

    gateway.addRegistration(person)
  }
}