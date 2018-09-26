const express = require('express')
const app = express()
const port = 8080
// dont know if this is correctly exposing this outside the container or does it matter if the server runs outside

app.get('/', (req, res) => res.send('Helasdasdlo World!'))

// put routes here to hit the mongo and psql DBs that are running

// connect to mongod with mongoose here too because at this point mongo and psql are fired up and running on their exposed ports

// "connect" to psql?

// mongo = 27017
// psql = 3309

app.listen(port, () => console.log(`Example app listening on port ${port}!`))