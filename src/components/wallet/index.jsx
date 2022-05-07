import { useContext } from 'react';

import UserContext from '../../contexts/userContext';

export default function Wallet() {
	const { user } = useContext(UserContext);

	return (
		<>
			<h1>Wallet</h1>
			<p>token = {user.token}</p>
		</>
	);
}