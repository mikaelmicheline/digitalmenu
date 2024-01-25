import config from '@/config'
import CompanyModel from '@/models/CompanyModel'
import ServiceResult from './ServiceResult'

export default class CompanyService {
  public static async getCompany (companyId: string): Promise<ServiceResult<CompanyModel>> {
    try {
      const response = await fetch(`${config.apiUrl}company/${companyId}`, {
        method: 'GET'
      })

      if (response.status === 404) {
        return {
          result: 'notFound'
        }
      }

      if (response.status !== 200) {
        return {
          result: 'apiError'
        }
      }

      const responseBody = await response.json()
      return {
        result: 'success',
        content: {
          ...responseBody,
          fetchedAt: new Date()
        }
      }
    } catch {
      return {
        result: 'networkError'
      }
    }
  }
}
