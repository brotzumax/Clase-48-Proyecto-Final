function calculateTotalPrice(products) {
    let totalPrice = 0;
    for (let product of products) {
        totalPrice += product.price;
    }
    return totalPrice;
}

export default calculateTotalPrice;