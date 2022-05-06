import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Inputs from './inputs';

//TODO: 
//deixar tudo redondinho
export default function Form() {
	const navigate = useNavigate();

	const [newUser, setNewUser] = useState({
		name: '',
		email:'',
		password: '',
		confirmPassword: ''
	});

	const { name, email, password, confirmPassword } = newUser;

	const signUp = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) return alert('As senhas precisam ser iguais!');

		const url = 'http://localhost:5000/users';
		try {
			console.log(newUser);
			await axios.post(url, {
				name,
				email,
				password
			});

			return navigate('/');
		} catch (error) {
			return alert('Ops! Houve algum erro...');
		}
	};

	return (
		<form onSubmit={signUp}>
			<Inputs {...{newUser, setNewUser}}/>
			<button>Entrar</button>
		</form>
	);
}