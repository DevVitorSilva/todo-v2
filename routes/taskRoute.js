import e, { Router } from "express";
import { addTask, deleteTask, getAllTasks, editTask, loadTask } from "../controllers/taskController.js";
import methodOverride from "method-override";

const routes = Router();

routes.use(methodOverride('_method'));

routes.get('/', getAllTasks);

routes.get('/edit/:id', e.urlencoded({extended: true}), loadTask)

routes.post('/edit/:id', e.urlencoded({extended: true}), editTask);

routes.post('/', e.urlencoded({extended: true}), addTask);

routes.delete('/', e.urlencoded({extended:true}), deleteTask)


export {
    routes,

}
