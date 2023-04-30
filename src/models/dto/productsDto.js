class ProductDto {
    constructor({ name, price, thumbnail }) {
        this.name = name;
        this.price = Number(price);
        this.thumbnail = thumbnail;
    }
}

export default ProductDto;