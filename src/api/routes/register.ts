import { Router } from 'express';
import passport from 'passport';
import {
	getRegister,
	postResister,
	sendUser,
	deleteUser,
} from '../controllers/register';

const register = Router();

register.get('/', getRegister);

register.post('/', postResister, passport.authenticate('local'), sendUser);

register.delete('/users/:id', deleteUser);

export default register;
