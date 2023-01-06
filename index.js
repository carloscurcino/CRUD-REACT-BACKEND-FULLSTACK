import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.js"

const app = express();
const PORT = 8800;

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});