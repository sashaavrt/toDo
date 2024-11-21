import express from "express";
import { select } from "./queries/select.js";
import { insert } from "./queries/insert.js";
const app = express()
const port = 3000

app.get('/',  select);
app.post('/', insert);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})