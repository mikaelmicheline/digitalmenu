import type Product from 'src/domain/entities/Product'
import type IProductRepository from 'src/domain/interfaces/repositories/IProductRepository'

export default class ProductRepository implements IProductRepository {
  async getAllByCompanyId (companyId: string): Promise<Product[]> {
    return products.filter(p => p.companyId === companyId)
  }

  async getById (companyId: string, productId: string): Promise<Product | undefined> {
    return products.find(p => p.companyId === companyId && p.productId === productId)
  }
}

const products: Product[] = [
  {
    productId: '435da6bc-919c-4a22-a58f-454e2a09fb28',
    companyId: 'WonderCakes',
    code: 'cake-01',
    name: 'Chocolate Cake',
    description: 'Reprehenderit dolor do dolore aliqua excepteur aliqua minim amet velit veniam aliquip amet. Voluptate deserunt ipsum sit deserunt ex Lorem magna sunt ut laborum Lorem. Cillum qui enim enim et id.',
    category: 'Cakes',
    salePrice: 40,
    picture: ''
  },
  {
    productId: '8585fe30-3038-40e8-a600-5050cd76324a',
    companyId: 'WonderCakes',
    code: 'cake-02',
    name: 'White Chocolate Cake',
    description: 'Adipisicing non veniam sint quis pariatur. Eu velit ea consequat sit reprehenderit dolor. Anim reprehenderit nulla occaecat ea Lorem Lorem qui cillum est. Dolor eu veniam occaecat laborum velit ipsum. Voluptate consectetur quis deserunt sunt est eu irure veniam sint cillum ex sunt commodo amet.',
    category: 'Cakes',
    salePrice: 40,
    picture: ''
  },
  {
    productId: 'adee9609-5aea-4de2-a3d1-075116b964af',
    companyId: 'WonderCakes',
    code: 'cake-03',
    name: 'Dark Chocolate Cake',
    description: 'Reprehenderit dolor do dolore aliqua excepteur aliqua minim amet velit veniam aliquip amet. Voluptate deserunt ipsum sit deserunt ex Lorem magna sunt ut laborum Lorem. Cillum qui enim enim et id.',
    category: 'Cakes',
    salePrice: 40,
    picture: ''
  },
  {
    productId: '2c8bd502-bed8-4c0b-a6b7-30126ccae2bd',
    companyId: 'WonderCakes',
    code: 'cake-04',
    name: 'Vanilla Cake',
    description: 'Nulla reprehenderit aliquip qui esse ullamco veniam sit magna quis. Adipisicing non veniam sint quis pariatur. Eu velit ea consequat sit reprehenderit dolor. Anim reprehenderit nulla occaecat ea Lorem Lorem qui cillum est. Dolor eu veniam occaecat laborum velit ipsum. Voluptate consectetur quis deserunt sunt est eu irure veniam sint cillum ex sunt commodo amet.',
    category: 'Cakes',
    salePrice: 40,
    picture: ''
  },
  {
    productId: '3518885e-dc60-4281-a986-6e63749d2b7c',
    companyId: 'WonderCakes',
    code: 'cake-05',
    name: 'Red Velvet Cake',
    description: 'Nulla reprehenderit aliquip qui esse ullamco veniam sit magna quis. Adipisicing non veniam sint quis pariatur. Eu velit ea consequat sit reprehenderit dolor. Anim reprehenderit nulla occaecat ea Lorem Lorem qui cillum est. Dolor eu veniam occaecat laborum velit ipsum. Voluptate consectetur quis deserunt sunt est eu irure veniam sint cillum ex sunt commodo amet.',
    category: 'Cakes',
    salePrice: 50,
    picture: ''
  },
  {
    productId: 'dc6cc833-71e6-47df-8f5b-a453de734e3b',
    companyId: 'WonderCakes',
    code: 'cake-06',
    name: 'Black Forest Cake',
    description: 'Nulla reprehenderit aliquip qui esse ullamco veniam sit magna quis. Adipisicing non veniam sint quis pariatur. Eu velit ea consequat sit reprehenderit dolor. Anim reprehenderit nulla occaecat ea Lorem Lorem qui cillum est. Dolor eu veniam occaecat laborum velit ipsum. Voluptate consectetur quis deserunt sunt est eu irure veniam sint cillum ex sunt commodo amet.',
    category: 'Cakes',
    salePrice: 50,
    picture: ''
  },
  {
    productId: '3162c36e-1faa-43f3-b00d-22e5083f16db',
    companyId: 'WonderCakes',
    code: 'cake-07',
    name: 'Hazelnut Cake',
    description: 'Nulla reprehenderit aliquip qui esse ullamco veniam sit magna quis. Adipisicing non veniam sint quis pariatur. Eu velit ea consequat sit reprehenderit dolor. Anim reprehenderit nulla occaecat ea Lorem Lorem qui cillum est. Dolor eu veniam occaecat laborum velit ipsum. Voluptate consectetur quis deserunt sunt est eu irure veniam sint cillum ex sunt commodo amet.',
    category: 'Cakes',
    salePrice: 50,
    picture: ''
  },
  {
    productId: 'a4dc0946-e4a3-4d31-a1f2-d97132bfb41c',
    companyId: 'WonderCakes',
    code: 'cake-08',
    name: 'Hazelnut Chocolate Cake',
    description: 'Nulla reprehenderit aliquip qui esse ullamco veniam sit magna quis. Adipisicing non veniam sint quis pariatur. Eu velit ea consequat sit reprehenderit dolor. Anim reprehenderit nulla occaecat ea Lorem Lorem qui cillum est. Dolor eu veniam occaecat laborum velit ipsum. Voluptate consectetur quis deserunt sunt est eu irure veniam sint cillum ex sunt commodo amet.',
    category: 'Cakes',
    salePrice: 50,
    picture: ''
  },
  {
    productId: '103ea407-c0c6-458a-ba44-81fa58ab5356',
    companyId: 'WonderCakes',
    code: 'cake-09',
    name: 'Strawberry Cake',
    description: 'Qui do enim non adipisicing veniam irure ut voluptate ut elit qui veniam aliqua. Proident duis ex nostrud minim velit sit magna elit voluptate. Dolore amet sunt ea commodo irure nostrud. Sint commodo laborum sunt ea. Ex est laborum elit dolor qui fugiat Lorem.',
    category: 'Cakes',
    salePrice: 50,
    picture: ''
  },
  {
    productId: '048aa5e5-b973-4198-a885-ccc9df3eb217',
    companyId: 'WonderCakes',
    code: 'cake-10',
    name: 'Blueberry Cake',
    description: 'Adipisicing non veniam sint quis pariatur. Eu velit ea consequat sit reprehenderit dolor. Anim reprehenderit nulla occaecat ea Lorem Lorem qui cillum est. Dolor eu veniam occaecat laborum velit ipsum. Voluptate consectetur quis deserunt sunt est eu irure veniam sint cillum ex sunt commodo amet.',
    category: 'Cakes',
    salePrice: 50,
    picture: ''
  },
  {
    productId: '37ab77a4-e31c-4049-867d-b57eabbbce06',
    companyId: 'WonderCakes',
    code: 'cake-11',
    name: 'Orange Cake',
    description: 'Qui do enim non adipisicing veniam irure ut voluptate ut elit qui veniam aliqua. Proident duis ex nostrud minim velit sit magna elit voluptate. Dolore amet sunt ea commodo irure nostrud. Sint commodo laborum sunt ea. Ex est laborum elit dolor qui fugiat Lorem.',
    category: 'Cakes',
    salePrice: 35,
    picture: ''
  },
  {
    productId: '11d6e431-923f-4a33-9cea-db0aa98c84f3',
    companyId: 'WonderCakes',
    code: 'cake-12',
    name: 'Lemon Cake',
    description: 'Adipisicing non veniam sint quis pariatur. Eu velit ea consequat sit reprehenderit dolor. Anim reprehenderit nulla occaecat ea Lorem Lorem qui cillum est. Dolor eu veniam occaecat laborum velit ipsum. Voluptate consectetur quis deserunt sunt est eu irure veniam sint cillum ex sunt commodo amet.',
    category: 'Cakes',
    salePrice: 35,
    picture: ''
  },
  {
    productId: '2cffe171-31e8-4cae-80af-083cd98547b1',
    companyId: 'WonderCakes',
    code: 'cake-13',
    name: 'Tangerine Cake',
    description: 'Adipisicing non veniam sint quis pariatur. Eu velit ea consequat sit reprehenderit dolor. Anim reprehenderit nulla occaecat ea Lorem Lorem qui cillum est. Dolor eu veniam occaecat laborum velit ipsum. Voluptate consectetur quis deserunt sunt est eu irure veniam sint cillum ex sunt commodo amet.',
    category: 'Cakes',
    salePrice: 35,
    picture: ''
  },
  {
    productId: '9a887627-d2bc-47d3-a28c-e2264ad19db8',
    companyId: 'WonderCakes',
    code: 'cake-14',
    name: 'Carrot Cake',
    description: 'Adipisicing non veniam sint quis pariatur. Eu velit ea consequat sit reprehenderit dolor. Anim reprehenderit nulla occaecat ea Lorem Lorem qui cillum est. Dolor eu veniam occaecat laborum velit ipsum. Voluptate consectetur quis deserunt sunt est eu irure veniam sint cillum ex sunt commodo amet.',
    category: 'Cakes',
    salePrice: 35,
    picture: ''
  },
  {
    productId: '7e369900-f4c4-4a39-9135-a3bbed68bc21',
    companyId: 'WonderCakes',
    code: 'cake-15',
    name: 'Lovely Wedding Cake',
    description: 'Adipisicing non veniam sint quis pariatur. Eu velit ea consequat sit reprehenderit dolor. Anim reprehenderit nulla occaecat ea Lorem Lorem qui cillum est. Dolor eu veniam occaecat laborum velit ipsum. Voluptate consectetur quis deserunt sunt est eu irure veniam sint cillum ex sunt commodo amet.',
    category: 'Wedding Cakes',
    salePrice: 60,
    picture: ''
  },
  {
    productId: '30ce2608-1574-451d-aa50-4561b7f809e5',
    companyId: 'WonderCakes',
    code: 'cake-16',
    name: 'Diamond Wedding Cake',
    description: 'Adipisicing non veniam sint quis pariatur. Eu velit ea consequat sit reprehenderit dolor. Anim reprehenderit nulla occaecat ea Lorem Lorem qui cillum est. Dolor eu veniam occaecat laborum velit ipsum. Voluptate consectetur quis deserunt sunt est eu irure veniam sint cillum ex sunt commodo amet.',
    category: 'Wedding Cakes',
    salePrice: 80,
    picture: ''
  },
  {
    productId: '4973eca4-5bee-4ede-ab6e-5248864b2f73',
    companyId: 'WonderCakes',
    code: 'cake-17',
    name: 'Golden Wedding Cake',
    description: 'Adipisicing non veniam sint quis pariatur. Eu velit ea consequat sit reprehenderit dolor. Anim reprehenderit nulla occaecat ea Lorem Lorem qui cillum est. Dolor eu veniam occaecat laborum velit ipsum. Voluptate consectetur quis deserunt sunt est eu irure veniam sint cillum ex sunt commodo amet.',
    category: 'Wedding Cakes',
    salePrice: 80,
    picture: ''
  },
  {
    productId: '026d5269-a07d-40d8-9899-db1046d5966b',
    companyId: 'WonderCakes',
    code: 'cake-18',
    name: 'Affection Wedding Cake',
    description: 'Adipisicing non veniam sint quis pariatur. Eu velit ea consequat sit reprehenderit dolor. Anim reprehenderit nulla occaecat ea Lorem Lorem qui cillum est. Dolor eu veniam occaecat laborum velit ipsum. Voluptate consectetur quis deserunt sunt est eu irure veniam sint cillum ex sunt commodo amet.',
    category: 'Wedding Cakes',
    salePrice: 60,
    picture: ''
  },
  {
    productId: 'abe1a462-aab2-4d1d-bde7-09bacb9b4079',
    companyId: 'WonderCakes',
    code: 'cake-19',
    name: 'Gluten-Free Chocolate Cake',
    description: 'Adipisicing non veniam sint quis pariatur. Eu velit ea consequat sit reprehenderit dolor. Anim reprehenderit nulla occaecat ea Lorem Lorem qui cillum est. Dolor eu veniam occaecat laborum velit ipsum. Voluptate consectetur quis deserunt sunt est eu irure veniam sint cillum ex sunt commodo amet.',
    category: 'Gluten-Free Cakes',
    salePrice: 60,
    picture: ''
  },
  {
    productId: '22e14a61-35d1-49c9-8550-ec54aed13b48',
    companyId: 'WonderCakes',
    code: 'cake-20',
    name: 'Gluten-Free White Chocolate Cake',
    description: 'Adipisicing non veniam sint quis pariatur. Eu velit ea consequat sit reprehenderit dolor. Anim reprehenderit nulla occaecat ea Lorem Lorem qui cillum est. Dolor eu veniam occaecat laborum velit ipsum. Voluptate consectetur quis deserunt sunt est eu irure veniam sint cillum ex sunt commodo amet.',
    category: 'Gluten-Free Cakes',
    salePrice: 60,
    picture: ''
  },
  {
    productId: '3913f024-fcb2-4e6d-8472-e212247e4943',
    companyId: 'WonderCakes',
    code: 'cake-21',
    name: 'Gluten-Free Strawberry Cake',
    description: 'Adipisicing non veniam sint quis pariatur. Eu velit ea consequat sit reprehenderit dolor. Anim reprehenderit nulla occaecat ea Lorem Lorem qui cillum est. Dolor eu veniam occaecat laborum velit ipsum. Voluptate consectetur quis deserunt sunt est eu irure veniam sint cillum ex sunt commodo amet.',
    category: 'Gluten-Free Cakes',
    salePrice: 60,
    picture: ''
  }
]
