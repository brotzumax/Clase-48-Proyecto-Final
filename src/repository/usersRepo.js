import UsersDaoFactory from "../factories/usersDaoFactory.js";
import UserDto from "../models/dto/usersDto.js";
import ProductDto from "../models/dto/productsDto.js";


class UsersRepo {
    constructor() {
        this.userDao = UsersDaoFactory.getInstance().getDao();
    }

    async add(newUser) {
        const dto = new UserDto(newUser);
        await this.userDao.add(dto);
    }

    async getByEmail(email) {
        const userDao = await this.userDao.getByEmail(email);
        if (userDao) {
            return new UserDto(userDao);
        }
        return null;
    }

    async getById(userID) {
        const userDao = await this.userDao.getById(userID);
        if (userDao) {
            return new UserDto(userDao);
        }
        return null;
    }

    async addProductToCart(userEmail, product) {
        const productDto = new ProductDto(product);
        await this.userDao.addProductToCart(userEmail, productDto);
    }

    async removeProductFromCart(userEmail, productName) {
        await this.userDao.removeProductFromCart(userEmail, productName);
    }

    async cleanCart(userEmail) {
        await this.userDao.cleanCart(userEmail);
    }
}

export default UsersRepo;