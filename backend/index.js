import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";
dotenv.config({ path: './.env' })


const MONGODB_KEY = process.env.MONGO_URI;
const PORT = process.env.PORT

async function start() {
    try {
        await connectDB(MONGODB_KEY);
        app.listen(PORT, () => console.log(`App listening on ${PORT}`))
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}


start()