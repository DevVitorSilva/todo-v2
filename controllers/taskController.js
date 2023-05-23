import { TaskModel } from "../models/TaskModel.js";

const getAllTasks = async (req, res) => {
    try {
        let docs = await TaskModel.find({});
        res.render('index', {docs});
    } catch (err) {
        res.send(`Erro getAllTasks: ${err}`);
    }
}

const addTask = async (req, res) => {
    const {task} = req.body;
    const tasDoc = new TaskModel({task});
    
    try {
        await tasDoc.save();
        res.redirect('/')
    } catch (err) {
        res.render('index', {err})
    }
}

const deleteTask = async (req, res) => {
    const {id} = req.body;

    try {
        await TaskModel.findByIdAndDelete(id);
        res.redirect('/');
    } catch (err) {
        res.send(`erro deleteTask: ${err}`);
    }
}

const editTask = async (req, res) => {
    let {id} = req.params;
    const {task} = req.body;

    try {
        await TaskModel.updateOne({_id: id}, {task});
        res.redirect('/');
    } catch (err) {
        res.render('edit', {err, body: req.params});
    }
}

const loadTask = async (req, res) => {
    const {id} = req.params;

    try {
        let doc = await TaskModel.findById(id);
        res.render('edit', {err: false, body: doc});
    } catch (err) {
        res.status(404).send(`erro loadTask: ${err}`);
    }
}

export {
    getAllTasks,
    addTask,
    deleteTask,
    editTask,
    loadTask,
}