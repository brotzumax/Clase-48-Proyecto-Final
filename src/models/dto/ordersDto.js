class OrderDto {
    constructor({ _id, clientEmail, products, date, totalPrice }) {
        this.orderId = _id;
        this.clientEmail = clientEmail;
        this.products = products;
        this.date = date;
        this.totalPrice = totalPrice;
    }
}

export default OrderDto;