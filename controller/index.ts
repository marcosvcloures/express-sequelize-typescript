import * as express from 'express'

import login from './login'

const router = express.Router()

login(router)

export default router