import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import MasterRouter from './routers/MasterRouter'

dotenv.config()

class Server
{
  public app: express.Application = express()
  private port: number = Number(process.env.PORT) || 5000
  
  start = (): void =>
  {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(helmet())
    this.app.use(MasterRouter)

    this.app.listen(this.port, () =>
    {
      console.log(`Server running on port ${this.port}`)
    })
  }
}

const server = new Server()


server.start()





