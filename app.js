import e from "express";
import { main } from "./db/db.js";
import { routes } from "./routes/taskRoute.js";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import serveFavicon from "serve-favicon";
import dotenv from 'dotenv'

dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = e();
const port = 9000;
const db = process.env.MONGODB_URL

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

main(db).
catch((err) => {
    console.log(`erro com database: ${err}`);
});

app.use(serveFavicon(__dirname + '/public/favicon.ico'))

app.use(routes);

app.listen(port, () => {
    console.log(`status-server: 200`);
});



