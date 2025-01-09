import express from "express";
import dotenv from "dotenv"
import connectDb from "./dbConnector.js";
import route from "./routes/index.js";
const app = express();
dotenv.config();

//middle to parse JSON request bodies
app.use(express.json());
//middle to log requests

app.use(express.urlencoded({ extended: true }));
//routes(basicroutes)
app.use("/api/v1", route)
//http://localhost:3400/api/v1/users

app.get("/",(req, res) => {
    res.status(200).json({
        status: "success",
        author: "Nova",
        message: "im learning from expert",
    });
});
connectDb
const PORT = process.env.PORT || 4700;
//start server

app.listen(PORT, () => {
    console.log(`server running on port: http://localhost:${PORT}`)
});