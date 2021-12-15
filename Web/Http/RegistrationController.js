import RegistrationUseCase from "../../UseCases/UseCase/RegistrationUseCaseSpesification"

export default class RegistrationController {
  register (request, response) {
    let useCase = new RegistrationUseCase()
    const isRegistered = useCase.run(request)

    if (isRegistered.status === 'success') {
      return (isRegistered.data)
    } else {
      return (isRegistered.status)
    }
  }
}