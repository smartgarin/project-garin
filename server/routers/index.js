import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.send({ api: "node.js 서버에서 프론트엔드로 넘어온 내용입니다." });
});

module.exports = router;