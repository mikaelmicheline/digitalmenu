import type Company from 'src/domain/entities/Company'
import type ICompanyRepository from 'src/domain/interfaces/repositories/ICompanyRepository'

export default class CompanyRepository implements ICompanyRepository {
  async getById (companyId: string): Promise<Company | undefined> {
    return companies.find(c => c.companyId === companyId)
  }
}

const companies: Company[] = [
  {
    companyId: 'WonderCakes',
    name: 'Wonder Cakes',
    isOpen: true
  }
]
