import mongoose from "mongoose"
import app from "./app.js"

( async () => {

    try {
        await mongoose.connect("mongodb://localhost:27017/", {
            dbName: "RecipeDatabase"
        });
        
        console.log("DB Connected")
        const onListening = () => {
            console.log("listening")
        }
        app.listen(5000,onListening);
    }catch (error) {
        console.error("error" ,error);
        throw error;
    }
}

)()
