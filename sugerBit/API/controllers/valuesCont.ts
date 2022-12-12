import { connection } from "../../server";

export const selectAllValues = (req, res) => {
    try {
        const query = `SELECT * FROM units;`;
        connection.query(query, (err, results) => {
            try {
                if (err) throw new err;
                console.log(results);
                
                res.send(results)
            } catch (error) {
                console.error(error);
                
            }
        })
    } catch (error) {
        res.send({error: error.message})
    }
} 