import { type NextFunction, type Request, type Response } from 'express'

const asyncWrapper = (asyncFn: (req: Request, res: Response) => Promise<void>) => {
  return function (req: Request, res: Response, next: NextFunction) {
    Promise.resolve(asyncFn(req, res)).catch(next)
  }
}

export default asyncWrapper
