import RegistrationController from "./Web/Http/RegistrationController"

const web = new RegistrationController()

let responseFromWeb = web.register({name: 'Budi', age: 20})
let {name, age} = responseFromWeb

console.log(name, age)