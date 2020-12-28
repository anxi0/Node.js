const express = require("express");
const morgan = require("morgan"); //For logging additional error message
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const path = require("path");

const fs = require("fs");

try {
  fs.readdirSync("uploads");
} catch (e) {
  console.error(e);
  console.error("No /uploads folder, making");
  fs.mkdirSync("uploads");
}

dotenv.config();
const app = express();
app.set("port", process.env.PORT || 3000);
const indexRouter = require("./routes");
const userRouter = require("./routes/user");
const uploadRouter = require("./routes/upload");

app.use(morgan("dev")); //combined, common, short, tiny
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json()); //body-parser : when using raw and text, npm install body-parser
app.use(express.urlencoded({ extended: false })); //body-parser : when using multipart data, use multer
app.use(cookieParser(process.env.COOKIE_SECRET)); //cookie-parser : put cookie informations to req.cookies
//res.cookie(key,value,option) to make cookie
//res.clearCookie(key,value,option) to delete cookie, option should also correspond except "expires and maxAge"
//put sign after cookie : option signed: true this is in req.signedCookies
app.use(
  //express-session : is in req.session
  session({
    resave: false, //when request, resave session
    saveUninitialized: false, //starts with Initialized session
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false, //http available, turn on when you publish
    },
    name: "session-cookie", //Better set this same with COOKIE_SECRET
    //caching sessions by using redis and store option contains information of redis
  })
);
//app.use('/files',express.static(path.join(__dirname,'public'))) //static

app.use((req, res, next) => {
  console.log("For all requests");
  next();
});

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/upload", uploadRouter);

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} No router`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), " Listening");
});

//FIXME: checkout Express req,res Object, Different with http req,res objects, expanded
