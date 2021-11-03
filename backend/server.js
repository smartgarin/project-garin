//const express = require("express");
import express from "express";

//import connectDB from "./db";

const app = express();
//connectDB();

app.get("/", (req, res) => {
	res.send("node.js 서버 동작 중");
});

// 서버 리스닝
const port = process.env.PORT || 5000;

const HandleListening = () => {
	console.log(`✅ http://localhost:${port} 에서 서버 리스닝에 성공했습니다.`);
};

app.listen(port, HandleListening);
