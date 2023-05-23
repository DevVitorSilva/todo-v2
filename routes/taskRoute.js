import { Router } from "express";
import { getAllTasks } from "../controllers/taskController.js";

const routes = Router();

routes.get('/', getAllTasks);

export {
    routes,

}
