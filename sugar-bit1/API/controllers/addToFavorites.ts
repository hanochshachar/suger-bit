import {app, connection } from "../../server";
import jwt from 'jwt-simple';
import cookieParser from 'cookie-parser';
app.use(cookieParser());

export const addToFavorites = (req, res) => {
    try {
        const {user} = req.cookies;
        const secret = "itismysecret";
        const usercookie = jwt.decode(user, secret)
        const {userCookie} = usercookie
        const {name, grams, carbohydrates,
            unit, withprotein} = req.body;
        const query = `INSERT INTO favorites (name, unit, grams, carbohydrates, withprotein, usercookie )
             VALUES ('${name}', '${unit}', '${grams}',
             '${carbohydrates}', '${withprotein}', '${userCookie}')`

        connection.query(query, (err, results) => {
            if (err) return console.log(err);
            ;
            
            res.send({ok: true, results: results})
        })
    } catch (error) {
        res.send(error)
    }
}