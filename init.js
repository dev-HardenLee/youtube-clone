import "./models/Video";
import "./models/Comment";
import "./models/User";
import dotenv from "dotenv";
dotenv.config();
import "./db.js";
import app from "./app";





const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`Listening on http://localhost:${PORT} ❤`);
app.listen(PORT, handleListening);