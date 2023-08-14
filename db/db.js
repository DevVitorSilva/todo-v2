import mongoose from "mongoose";

async function main(uri){
    await mongoose.connect(uri, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
}

export {
    main,
    
}