import * as express from 'express'
import router from './controller'

const app = express()

const port = process.env.PORT || 8080;

app.use('/api', router)

app.listen(port)

console.log("Servidor RESTful funcionando na porta " + port)