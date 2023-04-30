import UsersRepo from "../repository/usersRepo.js";

let instance = null;

class UsersApi {
    constructor() {
        this.usersRepo = new UsersRepo();
    }

    async saveNewUser(newUser) {
        await this.usersRepo.add(newUser);
    }

    async findUserByEmail(email) {
        const user = await this.usersRepo.getByEmail(email);
        return user;
    }

    async findUserByID(userID) {
        const user = await this.usersRepo.getById(userID);
        return user;
    }

    async getUserCartByEmail(userEmail) {
        const user = await this.findUserByEmail(userEmail);
        return user.cart;
    }

    async addProductToUserCart(userEmail, product) {
        await this.usersRepo.addProductToCart(userEmail, product);
    }

    async removeProductFromCart(userEmail, productName) {
        await this.usersRepo.removeProductFromCart(userEmail, productName);
    }

    async clearUserCart(userEmail) {
        await this.usersRepo.cleanCart(userEmail);
    }

    static getInstance() {
        if (!instance) {
            instance = new UsersApi();
        }

        return instance;
    }
}

export default UsersApi;