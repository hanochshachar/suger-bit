import { connection } from "../../server";
import jwt from "jwt-simple";

const secret = "itismysecret";

export const addUser = (req, res) => {
  try {
    const { firstName, lastName, id, email, password, cookie } = req.body;
    const query = `INSERT INTO user (firstname, lastname, email, userid, cookie) VALUES 
        ('${firstName}', '${lastName}', '${email}', '${id}', '${cookie}')`;
    connection.query(query, (err, results) => {
      try {
        if (err) throw err;
          const payload = { userCookie: cookie };
          const token = jwt.encode(payload, secret);
          res.cookie("user", token);
          console.log(results);
          
        res.send({ok: true, results: results})
      } catch (error) {
        console.error(error);
      }
    });
  } catch (error) {
    res.send({ error: error.message });
  }
};
