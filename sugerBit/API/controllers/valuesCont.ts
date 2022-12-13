import {app, connection } from "../../server";
import jwt from 'jwt-simple';
import cookieParser from 'cookie-parser';
app.use(cookieParser())

export interface valuesDetails{
    id2: number,
    name: string,
    unit: string,
    Weight: number,
    carbohydrates: number,
    withprotein: number
};

export const selectAllValues = (req, res) => {
    try {
        const {user} = req.cookies;
        const secret = "itismysecret";
        const usercookie = jwt.decode(user, secret)
        const {userCookie} = usercookie
        console.log(userCookie);
        const query = `SELECT * FROM units
         UNION SELECT id AS id2, name, unit, grams AS Weight, carbohydrates, withprotein, image 
         FROM  privatevalues WHERE usercookie='${userCookie}' ;`;
        connection.query(query, (err, results) => {
            try {
                
                console.log(results);
                if (err) throw new err;
                res.send(results)
            } catch (error) {
                console.error(error);
                
            }
        })
    } catch (error) {
        res.send({error: error.message})
    }
} 