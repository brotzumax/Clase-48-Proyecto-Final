import ProductsDaoMongoose from "../models/dao/productsDaoMongoose.js";

const opcion = process.argv[3] || process.env.PERSISTENCE_MODE;
let instance = null;

class ProductsDaoFactory {
    constructor() {
        switch (opcion) {
            case 'MONGO':
                this.dao = new ProductsDaoMongoose();
                break;

            default:
                console.log(`El modelo "${opcion}" no existe - (MONGO)`);
                this.dao = null;
                break;
        }
    }

    getDao() {
        return this.dao;
    }

    static getInstance() {
        if (!instance) {
            instance = new ProductsDaoFactory();
        }
        return instance;
    }
}

export default ProductsDaoFactory;