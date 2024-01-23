import { type GetCompanyByIdInput, type GetCompanyByIdOutput } from 'src/application/interfaces/company/IGetCompanyById'
import type IGetCompanyById from 'src/application/interfaces/company/IGetCompanyById'
import type ICompanyRepository from 'src/domain/interfaces/repositories/ICompanyRepository'

export default class GetCompanyById implements IGetCompanyById {
  constructor (private readonly companyRepository: ICompanyRepository) {}

  async execute ({ companyId }: GetCompanyByIdInput): Promise<GetCompanyByIdOutput> {
    return await this.companyRepository.getById(companyId)
  }
}
