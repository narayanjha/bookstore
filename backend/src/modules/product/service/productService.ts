import { ProductRepository } from '../repository/productRepository.ts';

export class ProductService {
  constructor(private repo = new ProductRepository()) {}

  async createProduct(data: any, userId: string) {
    return this.repo.create({ ...data, seller: userId });
  }

  async getProducts() {
    return this.repo.findAll();
  }
}