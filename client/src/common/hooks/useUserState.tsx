import { useState, useEffect, useMemo } from 'react';

export default function useUserSate() {
	const [user, setUser] = useState(null);
	const userProvider = useMemo(() => {
		return { user, setUser };
	}, [user, setUser]);

	useEffect(() => {}, []);

	return [userProvider, user, setUser];
}
