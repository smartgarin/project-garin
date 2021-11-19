import express from "express";
import User from "../models/User";

const router = express.Router();

// 사용자 전체 조회
router.get('/', (req, res, next) => {
	User.find()
		.then((users) => {
			res.json(users);
		})
		.catch((err) => {
			console.error(err);
			next(err);
		})
});

// 유저 생성
router.post('/', (req, res, next) => {
	const user = new User({
		userNumber: req.body.userNumber,
		name: req.body.name,
		ID: req.body.ID,
		PW: req.body.PW,
		email: req.body.email
	})
	user.save()
		.then((result) => {
			res.json(result);
		})
		.catch((err) => {
			console.error(err);
			next(err);
		})
})

module.exports = router;