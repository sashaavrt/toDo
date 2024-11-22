import express from "express";
import cors from "cors";
import { select } from "../backend/queries/select.js";
import { insert } from "../backend/queries/insert.js";
import { delete_row } from "../backend/queries/delete.js";
import { update } from "../backend/queries/update.js";

const app = express()
const port = 3000
app.use(cors())
let bodyParser = import('body-parser')
app.use(express.json())

app.get('/',  select);
app.post('/', insert);
app.delete('/', delete_row);
app.post('/', update)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})