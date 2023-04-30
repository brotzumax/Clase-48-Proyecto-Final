import Order from "../orderModel.js";

class OrdersDaoMongoose {
    async add(newOrder) {
        try {
            const order = await Order.create(newOrder);
            return order;
        } catch (error) {
            console.log("Error al guardar la nueva orden");
            console.log(error);
        }
    }

    async getByOrderNumber(orderNumber) {
        try {
            const order = await Order.findById(orderNumber);
            if (!order) {
                console.log("Orden no encontrado");
            }
            return order;
        } catch (error) {
            console.log("Error al buscar la orden");
            console.log(error);
        }
    }

    async getAll() {
        try {
            const orders = await Order.find({});
            return orders;
        } catch (error) {
            console.log("Error al buscar las ordenes");
            console.log(error);
        }
    }
}

export default OrdersDaoMongoose;