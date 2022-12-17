import {app, connection } from "../../server";
import jwt from 'jwt-simple';
import cookieParser from 'cookie-parser';
app.use(cookieParser());

export const insertValueHome = (req, res) => {
    try {
        const {user} = req.cookies;
        const secret = "itismysecret";
        const usercookie = jwt.decode(user, secret)
        const {userCookie} = usercookie
        const {date, time, sugar, carbohydrates, insulin} =req.body;
        const query = `INSERT INTO daybook (date, time, suger, carbohydrates, insulin, usercookie)
                        VALUES ('${date}', '${time}', '${sugar}', 
                        '${carbohydrates}', '${insulin}', '${userCookie}')`
        connection.query(query, (err, results) => {
            try {
                if (err) throw err;
                
                res.send(results)
            } catch (error) {
                res.send(error)
            }
        })
    } catch (error) {
        res.send({error: error.message})
    }
}