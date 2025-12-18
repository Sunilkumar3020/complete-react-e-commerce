import User from "../model/user.models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"


// Register 

export const register = async (req, res) => {
    const { email, password } = req.body;
    const userCheck = await User.findOne({ email })
    if (userCheck) {
        return res.status(400).json({ message: "User already exists" })
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(201).json({ token })
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) return res.status(401).json({ message: "Invalid credentials" });
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({ token })
    } catch (error) {
        console.error(error);
        res.json("User not login, Invalid credentials")
    }
}