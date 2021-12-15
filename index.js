import RegistrationController from "./Web/Http/RegistrationController"

const web = new RegistrationController()

let responseFromBackend = web.register({name: 'Rahmat', age: 20})

console.log(responseFromBackend)