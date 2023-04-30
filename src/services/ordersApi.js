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
        const createdOrder = await this.ordersRepo.add(newOrder);
        return createdOrder;
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