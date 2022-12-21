import { connection } from "../../server";

export const deleteDaybook = (req, res) =>{
    try {
        
    const {id} = req.body;
    
    const query = `DELETE FROM daybook
    WHERE id='${id}';`

    connection.query(query, (err, results) => {
        try {
            if (err) throw err;
            
            res.send(results)
        } catch (error) {
            res.send(error)
        }
    })
} catch (error) {
        res.send(error)
}
}