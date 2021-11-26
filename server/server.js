import express from "express";
import api from "./routers/index";
import fs from "fs";
import https from "https";
import http from "http";
import connectDB from "./db";

const app = express();
connectDB();

const options = {
	ca: fs.readFileSync("./cert/ca_bundle.crt"),
	key: fs.readFileSync("./cert/private.key"),
	cert: fs.readFileSync("./cert/certificate.crt")
};

// 라우터 미들웨어 등록하는 구간에서는 라우터를 모두 등록한 이후에 다른 것을 세팅한다
// 그렇지 않으면 순서상 라우터 이외에 다른것이 먼저 실행될 수 있다
// 라우트 미들웨어를 등록한다
app.use((req, res, next) => {
	if (req.secure) {
		next();
	} else {
		const to = `https://${req.hostname}${req.url}`;
		res.redirect(to);
	}
});

// app.use(function(req, res, next){
// 	if(!req.secure){
// 		res.redirect("https://"+ "garin.r_e.kr" + req.url);
// 	}else{
// 		next();
// 	}
// });

app.use(express.json());
app.use("/api", api);
app.get("/", (req, res) => res.send("node server가 작동중입니다."));


// 서버 리스닝
const httpPort = process.env.PORT || 8080;

const httpsPort = 8443;

http.createServer(app).listen(httpPort, () => {
	console.log(`✅ http://garin.r-e.kr:${httpPort} 에서 서버 리스닝에 성공했습니다.`);
});

https.createServer(options, app).listen(httpsPort, () => {
	console.log(`✅ https://garin.r-e.kr:${httpsPort} 에서 서버 리스닝에 성공했습니다.`);
});