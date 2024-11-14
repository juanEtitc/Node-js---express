import express from  "express";
import {router} from "./src/routes/router"

const app = express();

app.use(router);
app.listen(8080);



