import {app, connection } from "../../server";
import jwt from 'jwt-simple';
import cookieParser from 'cookie-parser';
app.use(cookieParser())

const getPrivate = (req, res) => {
    try {
        const {user} = req.cookies;
        console.log(user);
        const secret = "itismysecret";
        const usercookie = jwt.decode(user, secret)
        const {userCookie} = usercookie;
        const query = `SELECT * FROM privatevalues WHERE usercookie='${userCookie}'`
        connection.query(query, (err, results) => {
            try {
                if (err) throw new err;
                console.log(results);
                
                res.send(results)
            } catch (error) {
                res.send(error)
            }
        })
    } catch (error) {
        res.send(error)
    }
}