import ProductsDaoFactory from "../factories/productsDaoFactory.js";
import ProductDto from "../models/dto/productsDto.js";

class ProductsRepo {
    constructor() {
        this.dao = ProductsDaoFactory.getInstance().getDao();
    }

    async add(newProduct) {
        const dto = new ProductDto(newProduct);
        await this.dao.add(dto);
    }

    async getByName(productName) {
        const dao = await this.dao.getByName(productName);
        if (dao) {
            return new ProductDto(dao);
        }
        return null;
    }

    async getById(id) {
        const dao = await this.dao.getById(id);
        if (dao) {
            return new ProductDto(dao);
        }
        return null;
    }

    async getAll() {
        const daos = await this.dao.getAll();
        const dtos = [];
        for (let dao of daos) {
            dtos.push(new ProductDto(dao));
        }
        return dtos;
    }

    async update(productName, newProduct) {
        const dto = new ProductDto(newProduct);
        await this.dao.update(productName, dto);
    }

    async delete(productName) {
        await this.dao.delete(productName);
    }
}

export default ProductsRepo;