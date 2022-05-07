import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Inputs from './inputs';

//TODO: 
//deixar tudo redondinho
export default function Form() {
	const navigate = useNavigate();

	const [signupData, setSignupData] = useState({
		name: '',
		email:'',
		password: '',
		confirmPassword: ''
	});

	const { name, email, password, confirmPassword } = signupData;

	const signUp = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) return alert('As senhas precisam ser iguais!');

		const url = 'http://localhost:5000/users';
		try {
			await axios.post(url, {
				name,
				email,
				password
			});

			return navigate('/');
		} catch (error) {
			return alert(error.response.data);
		}
	};

	return (
		<form onSubmit={signUp}>
			<Inputs {...{signupData, setSignupData}}/>
			<button type='submit'>Entrar</button>
		</form>
	);
}