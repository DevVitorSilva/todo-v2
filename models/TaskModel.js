import { Schema, model } from "mongoose";

const taskSchema = new Schema(
    {
        task: {
            type: String,
            required: true
        }
    },
    {
        timestamps: {}
    }
);

const TaskModel = new model('task', taskSchema);

export {
    TaskModel
}