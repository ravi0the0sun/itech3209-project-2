import { Router } from 'express';
import passport from 'passport';
import { getUser, postLogin, postLogout } from '../controllers/auth';

const auth = Router();

auth.get('/user', getUser);

auth.post('/logout', postLogout);

auth.post('/login', passport.authenticate('local'), postLogin);

export default auth;
