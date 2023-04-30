import express from "express";
import sessionController from "../controllers/sessionController.js";
import passport from "passport";

const sessionRouter = express.Router();

//SIGNUP
sessionRouter.get('/signup', sessionController.getSignUp);
sessionRouter.post('/signup', passport.authenticate('signup', { failureRedirect: '/session/signup?error=true' }), sessionController.postSignUp);

//LOGIN
sessionRouter.get('/login', sessionController.getLogin);
sessionRouter.post('/login', passport.authenticate('login', { failureRedirect: '/session/login?error=true' }), sessionController.postLogin);

//LOGOUT
sessionRouter.get('/logout', sessionController.getLogout);

export default sessionRouter;