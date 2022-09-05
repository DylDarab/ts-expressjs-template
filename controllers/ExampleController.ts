import { Request, Response } from 'express'
class ExampleController
{
  myFunction1 = (req: Request, res: Response) =>
  {
    res.send('function 1')
    console.log('function 1')
  }
  
  myFunction2 = (req: Request, res: Response) =>
  {
    res.send('function 2')
    console.log('function 2')
  }
}

export default new ExampleController()