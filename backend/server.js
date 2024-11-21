import express from "express";
import cors from "cors";
import { select } from "../backend/queries/select.js";
import { insert } from "../backend/queries/insert.js";

const app = express()
const port = 3000
app.use(cors())

app.get('/',  select);
app.post('/', insert);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})