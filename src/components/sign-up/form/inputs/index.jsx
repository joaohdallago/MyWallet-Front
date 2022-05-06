export default function Inputs({ newUser, setNewUser }) {
	const { name, email, password, confirmPassword } = newUser;

	return (
		<>
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
		</>
	);
}