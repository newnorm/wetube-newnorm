import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL, 
    {
        useUnifiedTopology: true,
        useNewUrlParser: true, 
        useFindAndModify: false
    }
);


const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handlError = error => console.log(`❌ Error on DB Condection":${error}`);
 
db.once("open", handleOpen);
db.on("error", handlError);
