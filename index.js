const express = require("express");
const index = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const { application } = require("express");
const config = require("./config");
index.use(cookieParser());
index.use(express.json());

mongoose.connect(config.dbAddress, { useNewUrlParser: true }, () => {
	console.log("successfully connected to database");
});

const userRouter = require("./routes/User.js");
const passport = require("passport");
index.use(passport.initialize());
index.use("/user", userRouter);

index.listen(80, () => {
	console.log("express server started");
});

index.use(express.static("client/build"));
