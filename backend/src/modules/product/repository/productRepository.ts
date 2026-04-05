import { ProductModel } from "../model/Product.ts";

export class ProductRepository {
  async create(data: any) {
    return ProductModel.create(data);
  }

  async findAll() {
    return ProductModel.find();
  }

  async findById(id: string) {
    return ProductModel.findById(id);
  }
}