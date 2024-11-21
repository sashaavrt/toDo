import {connection} from '../connection.js';

const sql = `UPDATE tasks SET status=1 WHERE text=?`;
const data = ["JYGJ"];
connection.query(sql, data, function(err, results) {
    if(err) console.log(err);
    console.log(results);
});
connection.end();