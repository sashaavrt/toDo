import {connection} from '../connection.js';

const task = ["sasha"];
const sql = "INSERT INTO tasks (text, status) VALUES (?, 0)";

export function insert (req, res) {
    connection.query(sql, task, function(err, results) {
        if(!req.body) return res.sendStatus(400);
        const text = req.body.text;
        if(err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(results);  
});
};

connection.end();