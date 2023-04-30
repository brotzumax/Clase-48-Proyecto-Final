class OrderDto {
    constructor({ id, clientEmail, products, date, totalPrice }) {
        this.orderId = id;
        this.clientEmail = clientEmail;
        this.products = products;
        this.date = date;
        this.totalPrice = totalPrice;
    }
}

export default OrderDto;