import {connection} from '../connection.js';

export function update (req, res) {
const sql = `UPDATE tasks SET status=1, WHERE id=(?)`;
let task = req.body.id;
console.log(req.body); 
connection.query(sql, task, function(err, results) {
    if(err) console.log(err);
    console.log(results);
});
}
