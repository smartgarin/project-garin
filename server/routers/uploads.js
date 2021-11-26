import express from "express";
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
	destination: "../record",
	// 저장 될 파일 이름
	filename: (req, file, cb) => {
		cb(null, naming());
	}
});

let upload = multer({ storage: storage });

// 라우터
router.post("/", upload.single("file"), (req, res, next) => {
	res.send({
		fileName: req.file.filename
	});
});

module.exports = router;