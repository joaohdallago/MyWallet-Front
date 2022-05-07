export default function Inputs({ signupData, setSignupData }) {
	const handleSignupData = (e) => {
		const newData = {...signupData};
		const { name, value } = e.target;

		newData[name] = value;  
		setSignupData(newData);
	};

	const { name, email, password, confirmPassword } = signupData;
	return (
		<>
			<input
				type="text"
				placeholder="Nome"
				name="name"
				onChange={handleSignupData}
				value={name}
				required
			/>
			<input
				type="email"
				placeholder="E-mail"
				name="email"
				onChange={handleSignupData}
				value={email}
				required
			/>
			<input
				type="password"
				placeholder="Senha"
				name="password"
				onChange={handleSignupData}
				value={password}
				required
			/>
			<input
				type="password"
				placeholder="Confirme a Senha"
				name="confirmPassword"
				onChange={handleSignupData}
				value={confirmPassword}
				required
			/>
		</>
	);
}