import { Router } from "express";

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Hello 2');
});

export {
    routes,
    
}
