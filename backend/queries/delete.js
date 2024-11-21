import {connection} from '../connection.js';

const sql = "DELETE FROM tasks WHERE id=?";
const data = [1]; 
connection.query(sql, data, function(err, results) {
    if(err) console.log(err);
    console.log(results);
});
 
connection.end();