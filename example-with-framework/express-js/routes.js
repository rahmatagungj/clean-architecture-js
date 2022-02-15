import RegistrationController from "../../src/Web/Http/RegistrationController"
const express = require('express')

const router = express.Router()

router.post("/registration/:name/:age", function(req, res) {
  let regitration = new RegistrationController().register(
    {name: req.params.name, age: req.params.age}
    )

  res.json(regitration)
})

module.exports = router