const express = require("express");

const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router
  .route("/")
  .get((req, res) => {
    //FIXME: checkout multer routing mechanism
    res
      .status(200)
      .sendFile(path.resolve(__dirname + "/../views/multipart.html"));
  })
  .post(upload.fields([{ name: "image1" }, { name: "image2" }]), (req, res) => {
    console.log(req.files, req.body);
    res.send("ok");
  });
router.get("/:id", (req, res) => {
  console.log(req.query, req.params);
  console.log(fs.readdirSync("uploads"));
  res.status(200).send(
    "ID " +
      req.params.id +
      " : " +
      fs.readdirSync("uploads")[req.params.id - 1] +
      "<br/>Lists:<br/>" +
      fs.readdirSync("uploads").map((acc, index) => {
        return index + acc + "<br/>";
      })
  );
});

module.exports = router;
