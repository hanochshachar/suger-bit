import { app, connection } from "../../server";
import jwt from "jwt-simple";
import cookieParser from "cookie-parser";
app.use(cookieParser());

export const getSunday = (req, res) => {
  try {
    const { user } = req.cookies;
    const secret = "itismysecret";
    const usercookie = jwt.decode(user, secret);
    const { userCookie } = usercookie;
    const {sunday} = req.query;
    const query = `SELECT * FROM daybook WHERE usercookie='${userCookie}' 
                        AND date='${sunday}'`
        connection.query(query, (err, sun) => {
            try {
                if (err) console.log(err);
                 console.log(sun);
            
                res.send(sun)
                
            } catch (error) {
                res.send(error)
            }
        })
  } catch (error) {
    res.send(error)
  }
}

export const getMonday = (req, res) => {
  try {
    const { user } = req.cookies;
    const secret = "itismysecret";
    const usercookie = jwt.decode(user, secret);
    const { userCookie } = usercookie;
    const {monday} = req.query;
    const query = `SELECT * FROM daybook WHERE usercookie='${userCookie}' 
                        AND date='${monday}'`
        connection.query(query, (err, mon) => {
            try {
                if (err) console.log(err);
                 console.log(mon);
            
                res.send(mon)
                
            } catch (error) {
                res.send(error)
            }
        })
  } catch (error) {
    res.send(error)
  }
}

export const getTuesday = (req, res) => {
  try {
    const { user } = req.cookies;
    const secret = "itismysecret";
    const usercookie = jwt.decode(user, secret);
    const { userCookie } = usercookie;
    const {tuesday} = req.query;
    const query = `SELECT * FROM daybook WHERE usercookie='${userCookie}' 
                        AND date='${tuesday}'`
        connection.query(query, (err, tue) => {
            try {
                if (err) console.log(err);
                 console.log(tue);
            
                res.send(tue)
                
            } catch (error) {
                res.send(error)
            }
        })
  } catch (error) {
    res.send(error)
  }
}

export const getWednesday = (req, res) => {
  try {
    const { user } = req.cookies;
    const secret = "itismysecret";
    const usercookie = jwt.decode(user, secret);
    const { userCookie } = usercookie;
    const {wednesday} = req.query;
    const query = `SELECT * FROM daybook WHERE usercookie='${userCookie}' 
                        AND date='${wednesday}'`
        connection.query(query, (err, wed) => {
            try {
                if (err) console.log(err);
                 console.log(wed);
            
                res.send(wed)
                
            } catch (error) {
                res.send(error)
            }
        })
  } catch (error) {
    res.send(error)
  }
}

export const getThursday = (req, res) => {
  try {
    const { user } = req.cookies;
    const secret = "itismysecret";
    const usercookie = jwt.decode(user, secret);
    const { userCookie } = usercookie;
    const {thursday} = req.query;
    const query = `SELECT * FROM daybook WHERE usercookie='${userCookie}' 
                        AND date='${thursday}'`
        connection.query(query, (err, thu) => {
            try {
                if (err) console.log(err);
                 console.log(thu);
            
                res.send(thu)
                
            } catch (error) {
                res.send(error)
            }
        })
  } catch (error) {
    res.send(error)
  }
}

export const getFriday = (req, res) => {
  try {
    const { user } = req.cookies;
    const secret = "itismysecret";
    const usercookie = jwt.decode(user, secret);
    const { userCookie } = usercookie;
    const {friday} = req.query;
    const query = `SELECT * FROM daybook WHERE usercookie='${userCookie}' 
                        AND date='${friday}'`
        connection.query(query, (err, fri) => {
            try {
                if (err) console.log(err);
                 console.log(fri);
            
                res.send(fri)
                
            } catch (error) {
                res.send(error)
            }
        })
  } catch (error) {
    res.send(error)
  }
}

export const getSaturday = (req, res) => {
  try {
    const { user } = req.cookies;
    const secret = "itismysecret";
    const usercookie = jwt.decode(user, secret);
    const { userCookie } = usercookie;
    const {saturday} = req.query;
    const query = `SELECT * FROM daybook WHERE usercookie='${userCookie}' 
                        AND date='${saturday}'`
        connection.query(query, (err, sat) => {
            try {
                if (err) console.log(err);
                 console.log(sat);
            
                res.send(sat)
                
            } catch (error) {
                res.send(error)
            }
        })
  } catch (error) {
    res.send(error)
  }
}





