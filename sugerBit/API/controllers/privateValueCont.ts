import { app, connection } from "../../server";
import jwt from 'jwt-simple';
import cookieParser from 'cookie-parser';
app.use(cookieParser())

export const privateValuePost = (req, res) => {
    try {
        const {user} = req.cookies;
        // const {user} = cookie.value
        console.log(user);
        
        const secret = "itismysecret";
        const usercookie = jwt.decode(user, secret)
        const {userCookie} = usercookie
        console.log(userCookie);
        
        const { name, carbohydrates, calories, unit, grams, Fats, proteins, Cholesterol} = req.body;
        console.log(name, carbohydrates, calories, unit, grams, Fats, proteins, Cholesterol)
        const query = `INSERT INTO privatevalues (usercookie, name, carbohydrates, calories,
                                    unit, grams, Fats, proteins, Cholesterol) 
                        VALUES (${userCookie}, '${name}', '${carbohydrates}', '${calories}',
                         '${unit}', '${grams}', '${Fats}', '${proteins}', '${Cholesterol}' )`
         connection.query(query, (err, results) => {
            try {
                if (err) console.log(err);
                 console.log({results: results});
                 res.send({ok: true, results: results})
            } catch (error) {
                res.send({error: error.message})
            }
         })               
    } catch (error) {
        res.send({error: error.message})
    }
}