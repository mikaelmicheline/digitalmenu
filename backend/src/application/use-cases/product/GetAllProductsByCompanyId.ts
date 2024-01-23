import type IGetAllProductsByCompanyId from 'src/application/interfaces/product/IGetAllProductsByCompanyId'
import { type GetAllProductsByCompanyIdInput, type GetAllProductsByCompanyIdOutput } from 'src/application/interfaces/product/IGetAllProductsByCompanyId'
import type IProductRepository from 'src/domain/interfaces/repositories/IProductRepository'

export default class GetAllProductsByCompanyId implements IGetAllProductsByCompanyId {
  constructor (private readonly productRepository: IProductRepository) {}

  async execute ({ companyId }: GetAllProductsByCompanyIdInput): Promise<GetAllProductsByCompanyIdOutput> {
    const products = await this.productRepository.getAllByCompanyId(companyId)
    return { products }
  }
}
