import express from "express";
import api from "./routers/index";

//import cors from "cors";

//import connectDB from "./db";

const app = express();
//connectDB();

//app.use(cors());
app.use("/api", api);
app.get("/", (req, res) => res.send("node server가 작동중입니다."));
// 서버 리스닝
const port = process.env.PORT || 5000;

const HandleListening = () => {
	console.log(`✅ http://localhost:${port} 에서 서버 리스닝에 성공했습니다.`);
};

app.listen(port, HandleListening);
