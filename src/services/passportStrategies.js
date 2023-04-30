import { Strategy } from "passport-local";
import bcrypt from "bcrypt";
import UsersApi from "./usersApi.js";

const usersApi = UsersApi.getInstance();

async function login(email, password, done) {
    try {
        const user = await usersApi.findUserByEmail(email);

        if (!user) {
            return done(null, false, { message: "Correo electrónico no registrado" });
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return done(null, false, { message: "Contraseña incorrecta" });
        }

        return done(null, user);
    } catch (error) {
        return done(error);
    }
}

async function signup(req, email, password, done) {
    try {
        const newUser = {
            email: email,
            password: bcrypt.hashSync(password, 10),
            name: req.body.txtName
        }

        const alreadyUsed = await usersApi.findUserByEmail(email);
        if (alreadyUsed) {
            return done(null, false, { message: "La dirección Email ya está registrada" });
        }

        await usersApi.saveNewUser(newUser);
        return done(null, newUser, { message: "Nuevo usuario registrado" });
    } catch (error) {
        return done(error);
    }

}

export function serialize(user, done) {
    done(null, user.email);
}

export async function deserialize(email, done) {
    try {
        const user = await usersApi.findUserByEmail(email);
        done(null, user);
    } catch (error) {
        done(error);
    }
}

export const loginStrategy = new Strategy({ usernameField: 'txtEmail', passwordField: 'txtPassword' }, login);
export const signupStrategy = new Strategy({ usernameField: 'txtEmail', passwordField: 'txtPassword', passReqToCallback: true }, signup);
