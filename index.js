import { registration } from "./DB/registration"
import RegistrationController from "./src/Web/Http/RegistrationController"

const web = new RegistrationController()

// case 1
console.log("Request from frontend :", {name: 'Rahmat', age: 20});
console.log("=========================");
let responseFromBackend = web.register({name: 'Rahmat', age: 20})

// test case 1
if (responseFromBackend !== registration) {
  throw new Error('Registration 1 failed, data not same and not saved')
} else {
  console.log("Respond from backend :", responseFromBackend)
  console.log("All data on registration DB :", registration)
}


// case 2 
console.log("\nRequest from frontend :", {name: 'Agung', age: 21});
console.log("=========================");
let responseFromBackendTwo = web.register({name: 'Agung', age: 20})

// test case 2
if (responseFromBackendTwo !== registration) {
  throw new Error('Registration 2 failed, data not same and not saved')
} else {
  console.log("Respond from backend :", responseFromBackendTwo)
  console.log("All data on registration DB :", registration)
}