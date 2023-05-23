import e from "express";
import { main } from "./db/db.js";
import { routes } from "./routes/taskRoute.js";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = e();
const port = 9000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

main().
catch((err) => {
    console.log(`erro com database: ${err}`);
});

app.use(routes);

app.listen(port, () => {
    console.log(`status-server: 200`);
});



