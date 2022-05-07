export default function Inputs({ loginData, setLoginData }) {

	const handleLoginData = (e) => {
		const newData = {...loginData};
		const { type, value } = e.target;
		newData[type] = value;
		setLoginData(newData);
	};

	const {email, password} = loginData;
	return (
		<>
			<input
				type="email"
				placeholder="E-mail"
				onChange={handleLoginData}
				value={email}
				required
			/>
			<input
				type="password"
				placeholder="Senha"
				onChange={handleLoginData}
				value={password}
				required
			/>
		</>
	);
}