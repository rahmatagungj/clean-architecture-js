import RegistrationSpesification from "../../UseCases/UseCase/RegistrationSpesification"

export default class RegistrationController {
  constructor () {
    this.useCase = new RegistrationSpesification()
  }

  /**
   * 
   * @param {*} request all data came from requested url
   * @param {*} response data will be returned to client
   * @returns 
   */
  register (request, response) {
    const isRegistered = this.useCase.run(request)

    if (isRegistered.status === 'success') {
      return isRegistered.data
    } else {
      return isRegistered.status
    }
  }
}