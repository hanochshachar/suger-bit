import { connection } from "../../server";

export const addInsulin = (req, res) =>{
    try {
         // UPDATE Users SET weight = 160, desiredWeight = 145 WHERE id = 1;
        const {id, insulin} = req.body;
        const query = `UPDATE daybook SET insulin='${insulin}'
        WHERE id = '${id}';`
        connection.query(query, (err, results) => {
            try {
                if (err) throw err;
                console.log(results);
                
                res.send(results)
            } catch (error) {
                res.send(error)
            }
        })
    } catch (error) {
        res.send({error: error.message})
    }
}

export const addSugar = (req, res) =>{
    try {
        const {id, sugar} = req.body;
        const query = `UPDATE daybook SET suger='${sugar}'
        WHERE id='${id}';`
        connection.query(query, (err, results) => {
            try {
                if (err) throw err;
                console.log(results);
                
                res.send(results)
            } catch (error) {
                res.send(error)
            }
        })
    } catch (error) {
        res.send({error: error.message})
    }
}