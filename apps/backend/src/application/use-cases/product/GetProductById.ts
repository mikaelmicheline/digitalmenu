import { type GetProductByIdInput, type GetProductByIdOutput } from 'src/application/interfaces/product/IGetProductById'
import type IGetProductById from 'src/application/interfaces/product/IGetProductById'
import type IProductRepository from 'src/domain/interfaces/repositories/IProductRepository'

export default class GetProductById implements IGetProductById {
  constructor (private readonly productRepository: IProductRepository) {}

  async execute ({ companyId, productId }: GetProductByIdInput): Promise<GetProductByIdOutput> {
    return await this.productRepository.getById(companyId, productId)
  }
}
