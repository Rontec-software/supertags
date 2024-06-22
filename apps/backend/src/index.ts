import dotenv from 'dotenv'
dotenv.config()

import app from './external/api/config'
import HelloWorldController from './adapters/HelloWorldController'

new HelloWorldController(app)