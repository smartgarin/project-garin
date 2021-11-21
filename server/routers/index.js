import express from "express";

import users from "./users";
import pyconnect from "./pyconnect";

const router = express.Router();


router.get("/", (req, res) => {
    res.send({ api: "node.js 서버에서 프론트엔드로 넘어온 내용입니다." });
});

router.use("/users", users);
router.use("/pyconnect", pyconnect);

module.exports = router;