//frameworks
const express = require("express");
const app = express();
const dontenv = require("dotenv");
const mongoose = require("mongoose");
//routing content
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoresRoute = require("./routes/categories");
const path = require("path");
//storage
const multer = require("multer");
dontenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(
    "mongodb+srv://userisaziz:Ahmeds@cluster0.hn7d3gv.mongodb.net/blogwebsite?retryWrites=true&w=majority"
  )
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("file uploaded");
  console.log(res);
});

//Routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoresRoute);

//local host
app.listen("5000", () => {
  console.log("backnd is running");
});
