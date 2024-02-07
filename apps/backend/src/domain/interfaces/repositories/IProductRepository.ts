import type Product from 'src/domain/entities/Product'

export default interface IProductRepository {
  getAllByCompanyId: (companyId: string) => Promise<Product[]>
  getById: (companyId: string, productId: string) => Promise<Product | undefined>
}
