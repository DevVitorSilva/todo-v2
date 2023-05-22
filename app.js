import e from "express";
import { main } from "./db/db.js";
import { TaskModel } from "./models/TaskModel.js";

const app = e();
const port = 9000;

main().
catch((err) => {
    console.log(`erro com database: ${err}`);
});

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(port, () => {
    console.log(`status-server: 200`);
});



