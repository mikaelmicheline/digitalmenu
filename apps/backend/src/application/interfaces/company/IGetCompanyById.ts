export default interface IGetCompanyById {
  execute: (input: GetCompanyByIdInput) => Promise<GetCompanyByIdOutput>
}

export interface GetCompanyByIdInput {
  companyId: string
}

export type GetCompanyByIdOutput = {
  companyId: string
  name: string
  isOpen: boolean
} | undefined
