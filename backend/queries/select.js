import {connection} from '../connection.js';

export function select (req, res) {
    connection.query("SELECT * FROM tasks",
    function(err, results) {
        if(err) {
            console.log(err);
            return res.json(err);
        }

        return res.json(results);  
    }
);
}
