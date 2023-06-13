const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const cors = require("cors");
const studentRoutes=require("./routes/studentRoutes");

const app=express();
const PORT=process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());
app.use("/",studentRoutes);


const mongoDb_URL="mongodb+srv://Supun:supun1234@cluster0.hmr74z6.mongodb.net/Project0?retryWrites=true&w=majority";

//Connect to mongoDB database
mongoose.connect(mongoDb_URL)
.then(()=>console.log("DB Connected..."))
.catch((err)=>console.log("DB not connected...",err));






app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));