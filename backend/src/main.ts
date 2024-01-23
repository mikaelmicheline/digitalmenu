import express from 'express'
import CompanyController from './infra/controllers/CompanyController'
import CompanyRepository from './infra/repositories/CompanyRepository'
import GetCompanyById from './application/use-cases/company/GetCompanyById'
import ProductController from './infra/controllers/ProductController'
import ProductRepository from './infra/repositories/ProductRepository'
import GetProductById from './application/use-cases/product/GetProductById'
import GetAllProductsByCompanyId from './application/use-cases/product/GetAllProductsByCompanyId'

const companyRepository = new CompanyRepository()
const productRepository = new ProductRepository()

const getCompanyById = new GetCompanyById(companyRepository)
const getProductById = new GetProductById(productRepository)
const getAllProductsByCompanyId = new GetAllProductsByCompanyId(productRepository)

const app = express()
app.use(express.json())

app.get('/', function (req, res) {
  res.json({ message: 'Welcome!' })
});

(new CompanyController(getCompanyById)).register(app);
(new ProductController(getProductById, getAllProductsByCompanyId)).register(app)

const port = 3000
app.listen(port, () => {
  console.log(`🌍 Server running on port ${port}!`)
})
