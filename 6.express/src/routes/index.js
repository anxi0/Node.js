const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("GET /");
  res.status(200).send("Hi, Exp");
});

module.exports = router;
