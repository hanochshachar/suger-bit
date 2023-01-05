import { app, connection } from "../../server";
import jwt from 'jwt-simple';
import cookieParser from 'cookie-parser';
app.use(cookieParser())

export const privateValuePost = (req, res) => {
    try {
        const {user} = req.cookies;
        const secret = "itismysecret";
        const usercookie = jwt.decode(user, secret)
        const {userCookie} = usercookie
        console.log(userCookie);
        
        const { name, carbohydrates, calories, unit, grams, Fats, proteins, Cholesterol} = req.body;
        const withprotein = carbohydrates + proteins * 0.5;
        console.log(name, carbohydrates, calories, unit, grams, Fats, proteins, Cholesterol, withprotein)
        const query = `INSERT INTO privatevalues (usercookie, name, carbohydrates, calories,
                                    unit, grams, Fats, proteins, Cholesterol, withprotein ) 
                        VALUES ('${userCookie}', '${name}', '${carbohydrates}', '${calories}',
                         '${unit}', '${grams}', '${Fats}', '${proteins}', '${Cholesterol}',
                          '${withprotein}' )`
         connection.query(query, (err, results) => {
            try {
                if (err) console.log(err);
                if(results){
                 res.send({ok: true, results: results})}
            } catch (error) {
                res.send({error: error.message})
            }
         })               
    } catch (error) {
        res.send({error: error.message})
    }
}