import User from "../userModel.js";

class UsersDaoMongoose {
    async add(newUser) {
        try {
            await User.create(newUser);
            console.log("Usuario guardado");
        } catch (error) {
            console.log("Error al guardar el usuario");
            console.log(error);
        }
    }

    async getByEmail(email) {
        try {
            const user = await User.findOne({ email: email });
            if (!user) {
                console.log("Email no encontrado");
            }
            return user;
        } catch (error) {
            console.log("Error al buscar al usuario");
            console.log(error);
        }
    }

    async getById(id) {
        try {
            const user = await User.findById(id);
            if (!user) {
                console.log("Usuario no encontrado");
            }
            return user;
        } catch (error) {
            console.log("Error al buscar al usuario");
            console.log(error);
        }
    }

    async addProductToCart(userEmail, product) {
        try {
            const user = await User.findOne({ email: userEmail });
            user.cart.push(product);
            await user.save();
            console.log("Producto añadido al carrito");
        } catch (error) {
            console.log("Error al añadir el producto al carrito");
            console.log(error);
        }
    }

    async removeProductFromCart(userEmail, productName) {
        try {
            const user = await User.findOne({ email: userEmail });
            const productIndex = user.cart.findIndex(product => product.name === productName);
            if (productIndex > -1) {
                user.cart.splice(productIndex, 1);
                await user.save();
                console.log("Producto eliminado del carrito");
            } else {
                console.log("Producto no encontrado");
            }
        } catch (error) {
            console.log("Error al eliminar el producto del carrito");
            console.log(error);
        }
    }

    async cleanCart(userEmail) {
        try {
            const user = await User.findOne({ email: userEmail });
            user.cart = [];
            await user.save();
            console.log("Carrito limpiado");
        } catch (error) {
            console.log("Error al limpiar el carrito");
            console.log(error);
        }
    }
}

export default UsersDaoMongoose;