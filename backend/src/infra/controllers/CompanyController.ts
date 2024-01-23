import express, { type Express } from 'express'
import type IGetCompanyById from 'src/application/interfaces/company/IGetCompanyById'
import asyncWrapper from '../utils/asyncWrapper'

export default class CompanyController {
  constructor (private readonly getCompanyById: IGetCompanyById) {}

  register (app: Express): void {
    const router = express.Router()

    router.get('/:companyId', asyncWrapper(
      async (req, res) => {
        const { companyId } = req.params
        const company = await this.getCompanyById.execute({ companyId })

        if (company === undefined) {
          res.status(404).send(undefined)
          return
        }

        res.json(company)
      }
    ))

    app.use('/company', router)
  }
}
