import { connection } from "../../server";
import jwt from "jwt-simple";

const secret = "itismysecret";

export const addUser = (req, res) => {
  try {
    // const cookie = Math.floor(Math.random() * 1000000)
    const { firstName, lastName, id, email, password, cookie } = req.body;
    const query = `INSERT INTO user (firstname, lastname, email, password, userid, cookie) VALUES 
        ('${firstName}', '${lastName}', '${email}', '${password}', '${id}', '${cookie}')`;
    connection.query(query, (err, results) => {
      try {
        if (err) throw new err();
          const payload = { userCookie: cookie };
          const token = jwt.encode(payload, secret);
          res.cookie("user", token);
        res.send({ok: true})
      } catch (error) {
        console.error(error);
      }
    });
  } catch (error) {
    res.send({ error: error.message });
  }
};
