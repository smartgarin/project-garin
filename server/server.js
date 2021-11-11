import express from "express";

import api from "./routers/index";
import connectDB from "./db";

const app = express();
connectDB();

// 라우터 미들웨어 등록하는 구간에서는 라우터를 모두 등록한 이후에 다른 것을 세팅한다
// 그렇지 않으면 순서상 라우터 이외에 다른것이 먼저 실행될 수 있다
// 라우트 미들웨어를 등록한다
app.use("/api", api);
app.get("/", (req, res) => res.send("node server가 작동중입니다."));

// 서버 리스닝
const port = process.env.PORT || 5000;

const HandleListening = () => {
	console.log(`✅ http://localhost:${port} 에서 서버 리스닝에 성공했습니다.`);
};

app.listen(port, HandleListening);
