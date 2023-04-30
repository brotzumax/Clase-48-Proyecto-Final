import mongoose from "./mongooseConnection.js";

const orderSchema = new mongoose.Schema({
    clientEmail: String,
    products: { type: Array, default: [] },
    date: String,
    totalPrice: Number
});

const Order = mongoose.model('Order', orderSchema);

export default Order;