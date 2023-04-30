import OrdersDaoMongoose from "../models/dao/ordersDaoMongoose.js"

const opcion = process.argv[4] || 'MONGO';
let instance = null;

class OrdersDaoFactory {
    constructor() {
        switch (opcion) {
            case 'MONGO':
                this.dao = new OrdersDaoMongoose();
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
            instance = new OrdersDaoFactory();
        }
        return instance;
    }
}

export default OrdersDaoFactory;