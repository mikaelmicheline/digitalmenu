import ProductModel from './ProductModel'

export default interface CartProductModel {
  id: string,
  product: ProductModel,
  amount: number,
  comments: string
}
