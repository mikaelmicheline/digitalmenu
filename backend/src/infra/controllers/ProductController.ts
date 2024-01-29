import express, { type Express } from 'express'
import type IGetProductById from 'src/application/interfaces/product/IGetProductById'
import asyncWrapper from '../utils/asyncWrapper'
import type IGetAllProductsByCompanyId from 'src/application/interfaces/product/IGetAllProductsByCompanyId'

export default class ProductController {
  constructor (
    private readonly getProductById: IGetProductById,
    private readonly getAllProductsByCompanyId: IGetAllProductsByCompanyId
  ) {}

  register (app: Express): void {
    const router = express.Router()

    router.get('/:companyId/product/:productId', asyncWrapper(
      async (req, res) => {
        const { companyId, productId } = req.params
        const product = await this.getProductById.execute({ companyId, productId })

        if (product === undefined) {
          res.status(404).send(undefined)
          return
        }

        res.json(product)
      }
    ))

    router.get('/:companyId/product/', asyncWrapper(
      async (req, res) => {
        const { companyId } = req.params
        const products = await this.getAllProductsByCompanyId.execute({ companyId })

        res.json(products)
      }
    ))

    app.use('/company', router)
  }
}
