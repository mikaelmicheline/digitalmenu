import CartProductModel from './CartProductModel'

export default interface CartModel {
  companyId: string,
  products: CartProductModel[],
}
