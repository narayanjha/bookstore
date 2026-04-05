import { ProductModel } from "../model/Product.ts";

export class ProductRepository {
  async create(data: any) {
    console.log("Repository: Creating product with data:", data); // Debug log
    return ProductModel.create(data);
  }

  async findAll() {
    console.log("Repository: Fetching all products"); // Debug log
    return ProductModel.find();
  }

  async findById(id: string) {
    console.log("Repository: Fetching product with ID:", id); // Debug log
    return ProductModel.findById(id);
  }
}