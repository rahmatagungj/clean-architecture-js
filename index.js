import { registration } from "./DB/registration"
import RegistrationController from "./Web/Http/RegistrationController"

const web = new RegistrationController()

let responseFromBackend = web.register({name: 'Rahmat', age: 20})


// test case
if (responseFromBackend !== registration) {
  throw new Error('Registration failed, data not same and not saved')
} else {
  console.log("Respond from backend :", responseFromBackend)
  console.log("All data on registration DB :", registration)
}

