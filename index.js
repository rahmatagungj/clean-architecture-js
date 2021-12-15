import RegistrationController from "./Web/Http/RegistrationController"

const web = new RegistrationController()

let responseFromWeb = web.register({name: 'Budi', age: 20})

console.log(responseFromWeb)