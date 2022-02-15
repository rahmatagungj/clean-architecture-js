import RegistrationSpesification from "../../UseCases/UseCase/RegistrationSpesification"

export default class RegistrationController {
  constructor () {
    this.useCase = new RegistrationSpesification()
  }
  
  register (request, response) {
    const isRegistered = this.useCase.run(request)

    if (isRegistered.status === 'success') {
      return isRegistered.data
    } else {
      return isRegistered.status
    }
  }
}