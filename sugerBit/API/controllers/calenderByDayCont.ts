import {app, connection } from "../../server";
import jwt from 'jwt-simple';
import cookieParser from 'cookie-parser';
app.use(cookieParser());

export const calenderByDay = (req, res) => {
    try {
        const {user} = req.cookies;
        console.log(user);
        const secret = "itismysecret";
        const usercookie = jwt.decode(user, secret)
        const {userCookie} = usercookie
        const {date} = req.query;
        const query = `SELECT * FROM daybook WHERE usercookie='${userCookie}' AND date='${date}'`
        connection.query(query, (err, results) => {
            try {
                if (err) throw err;
                console.log(results);
                res.send(results)
                
            } catch (error) {
                res.send(error)
            }
        })
    } catch (error) {
        res.send({error: error.message})
    }
}