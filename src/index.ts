import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import passport from 'passport';

import User from './api/models/User';
import auth from './api/routes/auth';
import register from './api/routes/register';

import { PORT, URI, SECRET, USER, PASSWORD } from './api/config/config';

mongoose
	.connect(URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => {
		console.log('local database connected in port: 27017');
	})
	.catch(err => {
		console.error(err);
	});

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.use(
	session({
		resave: true,
		saveUninitialized: true,
		secret: SECRET,
		store: MongoStore.create({
			mongoUrl: URI,
		}),
	})
);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
	res.send('hello world');
});

app.use('/api', auth);
app.use('/api/register', register);

app.listen(PORT, () => {
	console.log(`server running on port: ${PORT}`);
});
