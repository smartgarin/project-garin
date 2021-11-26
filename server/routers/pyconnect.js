import express from "express";

const router = express.Router();

router.post("/", (req, res, next) => {
    // if (req.body.input)
    //     res.json({ input: true });
    // else
    // 	next(err);

    res.json({ input: true });
});

module.exports = router;