import ProductModel from './ProductModel'

export default interface CartProductModel {
  product: ProductModel,
  amount: number,
  comments: string
}
