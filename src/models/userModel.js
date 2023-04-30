import mongoose from "./mongooseConnection.js";

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    cart: { type: Array, default: [] }
});

const User = mongoose.model('User', userSchema);

export default User;