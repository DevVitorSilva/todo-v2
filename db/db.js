import mongoose from "mongoose";

async function main(){
    await mongoose.connect('mongodb://localhost/tasks', 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
}

export {
    main,
    
}