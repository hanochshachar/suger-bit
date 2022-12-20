import { app, connection } from "../../server";
import jwt from "jwt-simple";
import cookieParser from "cookie-parser";
app.use(cookieParser());

export const addTargetCont = (req, res) => {
  try {
    const { user } = req.cookies;
    const secret = "itismysecret";
    const usercookie = jwt.decode(user, secret);
    const { userCookie } = usercookie;
    const { date, target } = req.body;
    const query = `INSERT INTO target (usercookie, date, target)
                        VALUES ('${userCookie}', '${date}', '${target}')`;
    connection.query(query, (err, results) => {
      try {
        if (err) throw err;
        res.send(results);
      } catch (error) {
        res.send(error);
      }
    });
  } catch (error) {
    res.send({ error: error.message });
  }
};

export const UpdateTargetCont = (req, res) => {
  try {
    const { user } = req.cookies;
    const secret = "itismysecret";
    const usercookie = jwt.decode(user, secret);
    const { userCookie } = usercookie;
    const { date, target } = req.body;
    const query = `UPDATE target SET target='${target}' WHERE
                         usercookie='${userCookie}' AND date='${date}'`;
    connection.query(query, (err, results) => {
      try {
        if (err) throw err;
        res.send(results);
      } catch (error) {
        res.send(error);
      }
    });
  } catch (error) {
    res.send({ error: error.message });
  }
};

export const getTargetCont = (req, res) => {
  try {
    const { user } = req.cookies;
    const secret = "itismysecret";
    const usercookie = jwt.decode(user, secret);
    const { userCookie } = usercookie;
    const {date} = req.query;
    
    const query = `SELECT date, target FROM target WHERE 
    usercookie='${userCookie}' AND date='${date}'`
    connection.query(query, (err, results) => {
        try {
            if (err) throw err;
            res.send(results)
        } catch (error) {
            res.send(error)
        }
    })
  } catch (error) {
    res.send({ error: error.message });
  }
};
