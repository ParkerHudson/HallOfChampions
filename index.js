const express = require("express");
const index = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const { application } = require("express");
index.use(cookieParser());
index.use(express.json());

mongoose.connect(
	"mongodb://localhost:27017/hocauth",
	{ useNewUrlParser: true },
	() => {
		console.log("successfully connected to database");
	}
);

const userRouter = require("./routes/User.js");
const passport = require("passport");
index.use(passport.initialize());
index.use("/user", userRouter);

index.listen(5000, () => {
	console.log("express server started");
});
