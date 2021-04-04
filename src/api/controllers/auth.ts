export const getUser = (req: any, res: any) => {
	if (req?.user) {
		return res.json(extractUser(req));
	} else {
		return res.json({ user: null });
	}
};

export const postLogout = (req: any, res: any) => {
	if (req?.user) {
		req.logOut();
		res.json({ message: 'logout' });
	} else {
		res.json({ message: 'no user to logout' });
	}
};

export const postLogin = (req: any, res: any) => {
	res.json(extractUser(req));
};

function extractUser(req: any) {
	const { username, _id } = req.user;
	return { user: { username, _id } };
}
