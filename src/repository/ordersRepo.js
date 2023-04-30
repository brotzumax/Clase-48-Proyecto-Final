import OrdersDaoFactory from "../factories/ordersDaoFactory.js";
import OrderDto from "../models/dto/ordersDto.js";

class OrdersRepo {
    constructor() {
        this.dao = OrdersDaoFactory.getInstance().getDao();
    }

    async add(newOrder) {
        await this.dao.add(newOrder);
    }

    async getByOrderNumber(orderNumber) {
        const dao = await this.dao.getByOrderNumber(orderNumber);
        if (dao) {
            return new OrderDto(dao);
        }
        return null;
    }

    async getAll() {
        const daos = await this.dao.getAll();
        const dtos = [];
        for (let dao of daos) {
            dtos.push(new OrderDto(dao));
        }
        return dtos;
    }
}

export default OrdersRepo;