import ProductModel from './ProductModel'

export default interface CategoryWithProductsModel {
  category: string
  products: ProductModel[]
}
