import {app, connection } from "../../server";
import jwt from 'jwt-simple';
import cookieParser from 'cookie-parser';
app.use(cookieParser());

const addToFavorites = (req, res) => {
    try {
        const {user} = req.cookies;
        console.log(user);
        const secret = "itismysecret";
        const usercookie = jwt.decode(user, secret)
        const {userCookie} = usercookie
        const {name, garms, carbohydrates, protein, fat, calories} = req.body;
    } catch (error) {
        res.send(error)
    }
}