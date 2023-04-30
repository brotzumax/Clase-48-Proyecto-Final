import mongoose from "./mongooseConnection.js";

const productSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    price: Number,
    thumbnail: String
});

const Product = mongoose.model('Product', productSchema);

export default Product;