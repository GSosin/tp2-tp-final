import express from 'express'
import userRouter from './routes/userRoutes.js'
import examRouter from './routes/examRoutes.js'
export default class Application {
  constructor() {
    this.app = express()
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    console.log(process.env.PORT)
    this.app.set('port', process.env.PORT || 3000)
  }
  middlewares() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  routes() {
    this.app.use('/api', userRouter)
    this.app.use('/api', examRouter)
  }
  start() {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server is running on http://localhost:${this.app.get('port')}`)
    })
  }
}