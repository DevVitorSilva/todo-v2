import { TaskModel } from "../models/TaskModel.js";

const getAllTasks = async (req, res) => {
    try {
        let docs = await TaskModel.find({});
        res.render('index', {docs});
    } catch (err) {
        res.send(`Erro getAllTasks: ${err}`);
    }
}

export {
    getAllTasks,
    
}