import mongoose from "mongoose"

async function connectDB(url) {
    try {
        await mongoose.connect(url)
        console.log('MongoDB Connected !')
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
}

export default connectDB;