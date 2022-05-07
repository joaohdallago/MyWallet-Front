import { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Inputs from './inputs';

import UserContext from '../../../contexts/userContext';

export default function Form() {
	const navigate = useNavigate();
	const { setUser } = useContext(UserContext);
	const [ loginData, setLoginData ] = useState({
		email: '',
		password: '',
	});

	const login = async (e) => {
		e.preventDefault();

		const url = 'http://localhost:5000/sessions';
		try {
			const promise = await axios.post(url, loginData);
			
			const token = promise.data;

			setUser({ token });
			return navigate('/wallet');
		} catch (error) {
			return alert(error.response.data);
		}
	};
	
	return (
		<form onSubmit={login}>
			<Inputs {...{loginData, setLoginData}}/>
			<button type='submit'>Entrar</button>
		</form>
	);
}