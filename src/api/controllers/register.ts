import User from '../models/User';

export const getRegister = (req: any, res: any) => {
	res.send('register route');
};

export const postResister = async (req: any, res: any, next: any) => {
	const { username, password, email, dob } = req.body;
	try {
		const findUser = await User.findOne({ email: email });
		if (findUser) {
			throw new Error('EmailExistError');
		}
		await User.register(
			new User({
				username: username,
				email: email,
				dob: dob,
			}),
			password
		);
	} catch (error) {
		console.log(error);
		if (error.name === 'UserExistsError') {
			return res.status(400).json({ message: 'UserExistError' });
		}
		if (error.message === 'EmailExistError') {
			return res.status(400).json({ message: 'EmailExistError' });
		}
		return res.status(500).json({ message: 'ServerError' });
	}
	next();
};

export const sendUser = (req: any, res: any) => {
	return res.json({ user: { username: req.user.username } });
};
