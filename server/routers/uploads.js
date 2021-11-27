import express from "express";
import Audio from "../models/Audio";
import fs from "fs";
import multer from "multer";

const router = express.Router();

const naming = () => {
	const dir = "../record/";
	
	let name = "0";
	const files = fs.readdirSync(dir)
	name = String(files.length + 1);
	
	return name;
}

// multer-optional
const storage = multer.diskStorage({
	// 파일이 저장될 경로
	destination: "/home/garin/project-garin/record",
	// 저장 될 파일 이름
	filename: (req, file, cb) => {
		cb(null, naming());
	}
});

const upload = multer({ storage: storage });

// 서버에 파일 저장 및 디비에 파일명, 경로 저장
router.post('/', upload.single("file"), (req, res, next) => {
	const audio = new Audio({
		audioName: req.file.filename,
		audioRoute: req.file.path
	})
	audio.save()
		.then((result) => {
			res.json(result);
		})
		.catch((err) => {
			console.error(err);
			next(err);
		})
});

module.exports = router;