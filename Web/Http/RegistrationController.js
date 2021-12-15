import RegistrationSpesification from "../../UseCases/UseCase/RegistrationSpesification"

export default class RegistrationController {
  register (request, response) {
    let useCase = new RegistrationSpesification()
    const isRegistered = useCase.run(request)

    if (isRegistered.status === 'success') {
      return (isRegistered.data)
    } else {
      return (isRegistered.status)
    }
  }
}