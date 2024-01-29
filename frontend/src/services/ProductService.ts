import config from '@/config'
import ProductModel from '@/models/ProductModel'
import ServiceResult from './ServiceResult'
import CategoryWithProductsModel from '@/models/CategoryWithProductsModel'

export default class CompanyService {
  public static async getAllCategoriesWithProductsByCompanyId (companyId: string): Promise<ServiceResult<CategoryWithProductsModel[]>> {
    try {
      const response = await fetch(`${config.apiUrl}company/${companyId}/product`, {
        method: 'GET'
      })

      if (response.status !== 200) {
        return {
          result: 'apiError'
        }
      }

      const responseBody = await response.json()
      const products = responseBody.products as ProductModel[]
      const categories = await this.splitProductsInCategories(products)

      return {
        result: 'success',
        content: categories
      }
    } catch {
      return {
        result: 'networkError'
      }
    }
  }

  private static async splitProductsInCategories (products: ProductModel[]): Promise<CategoryWithProductsModel[]> {
    const categories: CategoryWithProductsModel[] = []

    await Promise.all(products.map(async (product) => {
      let categoryIndex = categories.findIndex(c => c.category === product.category)

      if (categoryIndex === -1) {
        categoryIndex = categories.push({ category: product.category, products: [] }) - 1
      }
      categories[categoryIndex].products.push(product)
    }))

    return categories
  }
}
