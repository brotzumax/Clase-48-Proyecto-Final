import ProductsApi from "../services/productsApi.js";
import UsersApi from "../services/usersApi.js";
import OrdersApi from "../services/ordersApi.js";
import calculateTotalPrice from "../services/pricesCalculator.js";

async function getHome(req, res) {
    const products = await ProductsApi.getInstance().getAllProducts()
    return res.render("pages/home", { userName: req.user.name, products: products });
}

async function postHome(req, res) {
    await UsersApi.getInstance().addProductToUserCart(req.user.email, req.body);
    res.send({ status: true });
}

async function getCart(req, res) {
    const cart = await UsersApi.getInstance().getUserCartByEmail(req.user.email);
    return res.render("pages/cart", { cart: cart });
}

async function deleteProducts(req, res) {
    if (req.body.allProducts) {
        await UsersApi.getInstance().clearUserCart(req.user.email);
    } else {
        await UsersApi.getInstance().removeProductFromCart(req.user.email, req.body.name);
    }
    const cart = await UsersApi.getInstance().getUserCartByEmail(req.user.email);
    return res.render("pages/cart", { cart: cart });
}

async function postNewPurchase(req, res) {
    const date = new Date();
    const cart = await UsersApi.getInstance().getUserCartByEmail(req.user.email);
    const newOrder = {
        clientEmail: req.user.email,
        products: cart,
        date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`,
        totalPrice: calculateTotalPrice(cart)
    }
    await OrdersApi.getInstance().newOrder(newOrder);
    await UsersApi.getInstance().clearUserCart(req.user.email);
    return res.redirect("/home");
}

function checkAuthentication(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/session/login');
    }
}

export default { getHome, postHome, getCart, deleteProducts, postNewPurchase, checkAuthentication };