import { Express } from 'express'

export default class HelloWorldController {
    constructor(
        readonly server: Express
    ) {
        server.get('/hello', (req, res) => {
            res.send('Hello World!')
        })
    }
}