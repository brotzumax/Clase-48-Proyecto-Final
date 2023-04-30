import { faker } from '@faker-js/faker';
import ProductsApi from './src/services/productsApi.js';

export default async function agregarProductos() {
    try {
        for (let i = 0; i < 30; i++) {
            let product = {
                name: faker.commerce.productName(),
                price: faker.commerce.price(800, 18000),
                thumbnail: faker.image.business(200, 200, true)
            }

            await ProductsApi.getInstance().addProduct(product);
        };
        console.log("Productos añadidos");
    } catch (error) {
        console.log(error);
    }
}
