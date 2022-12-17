import { connection } from "../../server";
import jwt from "jwt-simple";

const secret = "itismysecret";
export const login = (req, res) => {
  try {
    const { email, password } = req.query;
    console.log(email, password);

    const query = `SELECT * FROM user WHERE email='${email}' AND password = '${password}'`;

    connection.query(query, (err, results, fields) => {
      try {
        if (err) throw err;

        if (results.length > 0) {
          const payload = { userCookie: results[0].cookie };
          const token = jwt.encode(payload, secret);
          res.cookie("user", token);
          res.send({ ok: true });
        }
      } catch (error) {
        res.send({ error: error.message });
      }
    });
  } catch (error) {
    res.send({ error: error.message });
  }
};
