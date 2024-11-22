import {connection} from '../connection.js';

export function delete_row (req, res){
    const sql = "DELETE FROM tasks WHERE id=(?)";
    let task = req.body.id;
    console.log(req.body); 
    connection.query(sql, task, function(err, results) {
        if(err) console.log(err);
        console.log(results);
    });
}
 
