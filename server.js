import 'dotenv/config';
import express from "express";
import session from 'express-session';

import sessionRouter from './src/routes/sessionRouter.js';
import homeRouter from './src/routes/homeRouter.js';

import passport from 'passport';
import { loginStrategy, signupStrategy, serialize, deserialize } from './src/services/passportStrategies.js';

const app = express();

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Session
app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false
}));

//Passport
app.use(passport.initialize());
app.use(passport.session());
passport.use('signup', signupStrategy);
passport.use('login', loginStrategy);
passport.serializeUser(serialize);
passport.deserializeUser(deserialize);

//Plantillas
app.set('views', './src/views');
app.set('view engine', 'ejs');

//Routers
app.use("/session", sessionRouter);
app.use("/home", homeRouter);

//Redirecciones
app.use((req, res) => {
    console.log(`Petición ${req.url} no encontrada`);
    return res.redirect('/home');
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto ${process.env.PORT}`);
})