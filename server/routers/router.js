var express = require("express");
var router = express.Router();
// 요기 밑에 추가해주세요!!
var posts = require("../model/post"); // 스키마 불러오기

// Create
router.user("/", function(req, res, next) {
  const { title, content } = req.body; // 비구조화 할당

  console.log(req.body);

  const userModel = new posts();
  userModel.userNumber = userNumber;
  userModel.token = token;
  userModel
    .save()
    .then(newPost => {
      console.log("Create 완료");
      res.status(200).json({
        message: "Create success",
        data: {
          user: newUser
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
});

module.exports = router;