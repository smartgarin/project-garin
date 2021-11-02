import express from "express";
// 서버 리스닝

const app = express();

const port = process.env.PORT || 5000;

const HandleListening = () => {
	console.log(`✅ http://localhost:${port} 에서 서버 리스닝에 성공했습니다.`);
};

app.listen(port, HandleListening);