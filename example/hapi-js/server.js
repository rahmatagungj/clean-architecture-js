'use strict'

import RegistrationController from "../../src/Web/Http/RegistrationController"
const Hapi = require('@hapi/hapi')


const init = async () => {
    const server = Hapi.server({
        port: 1337,
        host: 'localhost',
        
    })
    
    server.route({
      method: 'POST',
      path: '/registration/{name}/{age}',
      handler: (req, res) => {
        let controller = new RegistrationController().register(
          {name: req.params.name, age: req.params.age}
          )
          
          return controller
        }
      })
      
    await server.register({
      plugin: require('hapi-cors'),
    })

    await server.start()
    console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
    console.log(err)
    process.exit(1)
})

init()