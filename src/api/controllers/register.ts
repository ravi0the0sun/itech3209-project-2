import nodemailer from 'nodemailer';

import User from '../models/User';
import { USER, PASSWORD } from '../config/config';

const transporter = nodemailer.createTransport({
	host: 'smtp.ethereal.email',
	port: 587,
	auth: {
		user: USER,
		pass: PASSWORD,
	},
});

export const getRegister = (req: any, res: any) => {
	res.send('register route');
};

export const postResister = async (req: any, res: any, next: any) => {
	const { username, password, email, dob } = req.body;
	try {
		if (!(username && password && email && dob)) {
			throw new Error('MissingUserCredinitals');
		}
		const findUser = await User.findOne({ email: email });
		if (findUser) {
			throw new Error('EmailExistError');
		}
		await User.register(new User({ username, email, dob }), password);
	} catch (error) {
		console.log(error);
		if (error.name === 'UserExistsError') {
			return res.status(400).json({ message: 'UserExistError' });
		}
		if (error.message === 'EmailExistError') {
			return res.status(400).json({ message: 'EmailExistError' });
		}
		if (error.message === 'MissingUserCredinitals') {
			return res.status(400).json({ message: 'MissingUserCredinitals' });
		}
		return res.status(500).json({ message: 'ServerError' });
	}
	next();
};

export const sendUser = async (req: any, res: any) => {
	const { username, email } = req.body;
	try {
		const info = await transporter.sendMail(message(username, email));
		console.log('Message sent: %s', info.messageId);
		// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

		// Preview only available when sending through an Ethereal account
		console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
	} catch (err) {
		return res.status(400).send(err.message);
	}
	return res.json({ user: { username: req.user.username } });
};

export const deleteUser = async (req: any, res: any) => {
	try {
		const user = await User.deleteOne({ _id: req.params.id });
		return res.status(200).send(user);
	} catch (err) {
		return res.status(500).send('Unsucessful');
	}
};

const message = (username: string, email: string) => {
	return {
		from: `"Administrator" <${USER}>`,
		to: email,
		subject: 'Hello ✔', // Subject line
		text: `Hello ${username},

Thank you for registering using ${email}.
If this is not you please contact our support team.
			
Kind Regards,
The Team.
			`, // plain text body
		html: `<b>Hello ${username},</b>
			<br>
			<p>Thank you for registering using <b>${email}</b>.</p>
			<p>If this is not you please contact our support team.</p>
			<br>
			<p>Kind Regards,</p>
			<b>The Team.</b>`, // html body
	};
};
