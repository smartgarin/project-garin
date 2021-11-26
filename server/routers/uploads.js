import express from "express";
import multer from "multer";
import path from "path";

const router = express.Router();

// multer-optional
const storage = multer.diskStorage({
	// 파일이 저장될 경로
	destination: (req, file, cb) => {
		cb(null, "record/");
	},
	// 저장 될 파일 이름
	filename: function (req, file, cb) {
		cb(null, "file" + Date.now() + path.extname(file.originalname));
	}
});

let upload = multer({ storage: storage });

// 라우터
router.post("/", upload.single("file"), function (req, res, next) {
	res.send({
		fileName: req.file.filename
	});
});

// router.post('/', (req, res, next) => {
// 	const file = new File({
// 		fileName: req.body.fileName,
// 		fileRoute: req.body.fileRoute
// 	})
// 	file.save()
// 		.then((result) => {
// 			res.json(result);
// 		})
// 		.catch((err) => {
// 			console.error(err);
// 			next(err);
// 		})
// });



router.get("/", (req, res) => {
	res.send("test")
});


module.exports = router;