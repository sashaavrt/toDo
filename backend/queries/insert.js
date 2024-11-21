import {connection} from '../connection.js';

export function insert (req, res) {
    console.log(req.body); 
    let task = req.body.text;
    // console.log(req); 
    // if(!req.body) return res.sendStatus(400);

    const sql = "INSERT INTO tasks (text) VALUES (?)";
    connection.query(sql, task, function(err, results) {
        // const text = req.body.text;
        if(err) {
            console.log(err);
            return res.json(err);
        }
        else {
            return res.json(results); 
        }
         
});
};

