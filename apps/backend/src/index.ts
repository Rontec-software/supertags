import dotenv from 'dotenv'
dotenv.config()

import app from './external/api/config'
import HelloWorldController from './adapters/controllers/HelloWorldController'
import UserController from './adapters/controllers/UserController'
import AuthController from './adapters/controllers/AuthController'

new HelloWorldController(app)
new UserController(app)
new AuthController(app)