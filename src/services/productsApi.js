import ProductsRepo from "../repository/productsRepo.js";

let instance = null;

class ProductsApi {
    constructor() {
        this.productsRepo = new ProductsRepo();
    }

    static getInstance() {
        if (!instance) {
            instance = new ProductsApi();
        }
        return instance;
    }

    async addProduct(newProduct) {
        await this.productsRepo.add(newProduct);
    }

    async getProductByName(productName) {
        const product = await this.productsRepo.getByName(productName);
        return product;
    }

    async getProductById(id) {
        const product = await this.productsRepo.getById(id);
        return product;
    }

    async getAllProducts() {
        const products = await this.productsRepo.getAll();
        return products;
    }

    async updateProduct(productName, newProduct) {
        await this.productsRepo.update(productName, newProduct);
    }

    async deleteProduct(productName) {
        await this.productsRepo.delete(productName);
    }
}

export default ProductsApi;