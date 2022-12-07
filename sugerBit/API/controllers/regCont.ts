import { connection } from "../../server";

export const addUser = (req, res) => {
  try {
    // const cookie = Math.floor(Math.random() * 1000000)
    const { firstName, lastName, id, email, password, cookie } = req.body;
    const query = `INSERT INTO user (firstname, lastname, email, password, userid, cookie) VALUES 
        ('${firstName}', '${lastName}', '${email}', '${password}', '${id}', '${cookie}')`;
    connection.query(query, (err, results, fields) => {
      try {
        if (err) throw new err();


        console.log(results);

        console.log(fields);
        // if(results) {

        // }
        // const cookie = results.cookie;
        // res.cookie("user", cookie);
        res.send({ ok: true });
      } catch (error) {
        console.error(error);
      }
    });
  } catch (error) {
    res.send({ error: error.message });
  }
};
