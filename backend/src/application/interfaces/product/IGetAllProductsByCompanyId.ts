export default interface IGetAllProductsByCompanyId {
  execute: (input: GetAllProductsByCompanyIdInput) => Promise<GetAllProductsByCompanyIdOutput>
}

export interface GetAllProductsByCompanyIdInput {
  companyId: string
}

export interface GetAllProductsByCompanyIdOutput {
  products: {
    productId: string
    companyId: string
    code: string
    name: string
    description: string
    category: string
    salePrice: number
    picture: string
  }[]
}
