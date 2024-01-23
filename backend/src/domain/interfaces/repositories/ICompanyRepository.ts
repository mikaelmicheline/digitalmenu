import type Company from 'src/domain/entities/Company'

export default interface ICompanyRepository {
  getById: (companyId: string) => Promise<Company | undefined>
}
