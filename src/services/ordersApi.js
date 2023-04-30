import OrdersRepo from "../repository/ordersRepo.js";

let instance = null;

class OrdersApi {
    constructor() {
        this.ordersRepo = new OrdersRepo();
    }

    static getInstance() {
        if (!instance) {
            instance = new OrdersApi();
        }
        return instance;
    }

    async newOrder(newOrder) {
        await this.ordersRepo.add(newOrder);
    }

    async getOrderByOrderNumber(orderNumber) {
        const order = this.ordersRepo.getByOrderNumber(orderNumber);
        return order;
    }

    async getAllOrders() {
        const orders = this.ordersRepo.getAll();
        return orders;
    }
}

export default OrdersApi;