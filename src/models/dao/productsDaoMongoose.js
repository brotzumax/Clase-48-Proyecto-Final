import Product from "../productModel.js";

class ProductsDaoMongoose {
    async add(newProduct) {
        try {
            await Product.create(newProduct);
            console.log("Producto guardado");
        } catch (error) {
            console.log("Error al guardar el producto");
            console.log(error);
        }
    }

    async getByName(productName) {
        try {
            const product = await Product.findOne({ name: productName });
            if (!product) {
                console.log("Producto no encontrado");
            }
            return product;
        } catch (error) {
            console.log("Error al buscar el producto");
            console.log(error);
        }
    }

    async getById(id) {
        try {
            const product = await Product.findById(id);
            if (!product) {
                console.log("Producto no encontrado");
            }
            return product;
        } catch (error) {
            console.log("Error al buscar el producto");
            console.log(error);
        }
    }

    async getAll() {
        try {
            const products = await Product.find({});
            return products;
        } catch (error) {
            console.log("Error al buscar los productos");
            console.log(error);
        }
    }

    async update(productName, newProduct) {
        try {
            const product = await Product.findOneAndUpdate({ name: productName }, newProduct, { new: true });
            if (!product) {
                console.log("Producto no encontrado");
            } else {
                console.log("Producto actualizado");
            }
        } catch (error) {
            console.log("Error al actualizar el producto");
            console.log(error);
        }
    }

    async delete(productName) {
        try {
            const product = await Product.findOneAndDelete({ name: productName });
            if (!product) {
                console.log("Producto no encontrado");
            } else {
                console.log("Producto eliminado");
            }
        } catch (error) {
            console.log("Error al eliminar el producto");
            console.log(error);
        }
    }
}

export default ProductsDaoMongoose;