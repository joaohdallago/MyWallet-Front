/* eslint-disable react-hooks/exhaustive-deps */

import styled from 'styled-components';
import axios from 'axios';
import { useContext, useEffect } from 'react';

import UserContext from '../../contexts/userContext';

export default function Wallet() {
	const { user, setUser } = useContext(UserContext);
	
	useEffect(() => {
		const fetchData = async () => {
			const config = {
				headers: {
					Authorization: `Bearer ${user.token}` 
				}
			};
			const url = 'http://localhost:5000/users';
			try {
				const response = await axios.get(url, config);
				setUser({...user, ...response.data});
			} catch (error) {
				console.log(error.response.data);
			}
		};
		fetchData();
	}, []);

	return (
		<Container>
			<h1>{user.name}</h1>
		</Container>
	);
}

const Container = styled.div`
`;