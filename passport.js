const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/User");
const JwtStrategy = require("passport-jwt").Strategy;
const config = require("./config");

const cookieExtractor = (req) => {
	let token = null;
	if (req && req.cookies) {
		token = req.cookies["access_token"];
	}
	return token;
};

passport.use(
	new JwtStrategy(
		{
			jwtFromRequest: cookieExtractor,
			secretOrKey: config.secret,
		},
		(payload, done) => {
			User.findById({ _id: payload.sub }, (err, user) => {
				if (err) return done(err, false);
				if (user) return done(null, user);
				else return done(null, false);
			});
		}
	)
);

passport.use(
	new LocalStrategy((username, password, done) => {
		User.findOne({ username }, (err, user) => {
			//Something went wrong
			if (err) return done(err);
			//No User Exists
			if (!user) return done(null, false);
			//Check if password correct
			user.comparePassword(password, done);
		});
	})
);
