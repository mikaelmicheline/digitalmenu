
type ServiceResultTypeSuccess<T> = {
  result: 'success',
  content: T
}

type ServiceResultTypeFailure = {
  result: 'notFound' | 'badRequest' | 'networkError' | 'apiError'
  content?: undefined
}

type ServiceResultType<T> = ServiceResultTypeSuccess<T> | ServiceResultTypeFailure

type ServiceResult<T> = ServiceResultType<T>;

export default ServiceResult
