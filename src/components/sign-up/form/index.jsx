import { useState } from 'react';
import axios from 'axios';

//TODO: 
//quebrar form em inputs e buttom
export default function Form() {
	const [newUser, setNewUser] = useState({
		name: '',
		email:'',
		password: '',
		confirmPassword: ''
	});

	const { name, email, password, confirmPassword } = newUser;

	const signUp = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) return alert('as senhas não bateram');

		const url = 'http://localhost:5000/users';
		try {
			console.log(newUser);
			const promise = await axios.post(url, {
				name,
				email,
				password
			});

			console.log(promise);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={signUp}>
			<input
				type="text"
				placeholder="Nome"
				onChange={e => setNewUser({...newUser, name: e.target.value})}
				value={name}
				required
			/>
			<input
				type="email"
				placeholder="E-mail"
				onChange={e => setNewUser({...newUser, email: e.target.value})}
				value={email}
				required
			/>
			<input
				type="text"
				placeholder="Senha"
				onChange={e => setNewUser({...newUser, password: e.target.value})}
				value={password}
				required
			/>
			<input
				type="text"
				placeholder="Confirme a Senha"
				onChange={e => setNewUser({...newUser, confirmPassword: e.target.value})}
				value={confirmPassword}
				required
			/>
			<button>Entrar</button>
		</form>
	);
}