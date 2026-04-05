import { ProductRepository } from '../repository/productRepository.ts';

export class ProductService {
  constructor(private repo = new ProductRepository()) {}

  async createProduct(data: any, userId: string) {
    console.log("Service: Creating product with data:", data, "for user ID:", userId); // Debug log
    return this.repo.create({ ...data, seller: userId });
  }

  async getProducts() {
    console.log("Service: Fetching products"); // Debug log
    return this.repo.findAll();
  }
}