import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    await mongoose.set('strictQuery', true);
    console.log("Conexion de base de datos exitosa");
} catch (error) {
    console.log(`Error al conectar la base de datos: ${error}`);
}

export default mongoose;