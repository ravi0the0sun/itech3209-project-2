import { Router } from 'express';
import passport from 'passport';
import { getRegister, postResister, sendUser } from '../controllers/register';

const register = Router();

register.get('/', getRegister);

register.post('/', postResister, passport.authenticate('local'), sendUser);

export default register;
