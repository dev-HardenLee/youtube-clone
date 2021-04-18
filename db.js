import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log("Connect To DB ❤");
const handleError = error => console.log(`❌ Error on DB Conntextion:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);