import {app, connection } from "../../server";
import jwt from 'jwt-simple';
import cookieParser from 'cookie-parser';
app.use(cookieParser());

export const addToCalender = (req, res) => {
    try {
        const {user} = req.cookies;
        console.log(user);
        const secret = "itismysecret";
        const usercookie = jwt.decode(user, secret)
        const {userCookie} = usercookie
        const {name, unit, grams, date, time, carbohydrates, withprotein} = req.body;
        const query = `INSERT INTO daybook (name, unit, grams, date,
                       time, carbohydrates, withprotein, usercookie) VALUES (
                '${name}', '${unit}', '${grams}', '${date}', '${time}',
                 '${carbohydrates}', '${withprotein}', '${userCookie}')`
        connection.query(query, (err, results)=> {
            try {
                if (err) throw err;
                res.send({ok: true, results})
            } catch (error) {
                res.send(error)
            }
        })    
            
    } catch (error) {
        res.send({error: error.message})
    }
}