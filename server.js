import express from "express";
import dotenv from 'dotenv';
dotenv.config({ path: './config/.env' });


const app = express();

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("<h1>Hola Mundo<h1/>");
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto ${process.env.PORT}`);
})