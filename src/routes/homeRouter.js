import express from "express";
import homeController from "../controllers/homeController.js";

const homeRouter = express.Router();
homeRouter.use(homeController.checkAuthentication);

//HOME
homeRouter.get('/', homeController.getHome);
homeRouter.post('/', homeController.postHome);

//CART
homeRouter.get('/cart', homeController.getCart);
homeRouter.delete('/cart', homeController.deleteProducts);

//PURCHASE
homeRouter.post('/cart/newPurchase', homeController.postNewPurchase);

export default homeRouter;