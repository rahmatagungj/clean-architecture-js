const express = require("express")
const routes = require("./routes")

const cors = require('cors')

const port = process.env.PORT || "1337"

const app = express()

app.use(cors({
    origin: '*'
}))

app.set("port", port)

app.use('/', routes)

// Server
app.listen(port, () => console.log(`Server running on localhost:${port}`))