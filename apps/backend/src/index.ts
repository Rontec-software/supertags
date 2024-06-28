import dotenv from 'dotenv'
dotenv.config()

import app from './external/api/config'
import HelloWorldController from './adapters/HelloWorldController'
import UserController from './adapters/UserController'

new HelloWorldController(app)
new UserController(app)