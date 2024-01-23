export default interface IGetProductById {
  execute: (input: GetProductByIdInput) => Promise<GetProductByIdOutput>
}

export interface GetProductByIdInput {
  companyId: string
  productId: string
}

export type GetProductByIdOutput = {
  productId: string
  companyId: string
  code: string
  name: string
  description: string
  category: string
  salePrice: number
  picture: string
} | undefined
