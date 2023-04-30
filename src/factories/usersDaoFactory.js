import UsersDaoMongoose from "../models/dao/usersDaoMongoose.js";

const opcion = process.argv[2] || process.env.PERSISTENCE_MODE;
let instance = null;

class UsersDaoFactory {
    constructor() {
        switch (opcion) {
            case 'MONGO':
                this.dao = new UsersDaoMongoose();
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
            instance = new UsersDaoFactory();
        }
        return instance;
    }
}

export default UsersDaoFactory;