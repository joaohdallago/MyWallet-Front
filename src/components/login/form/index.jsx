export default function Form() {
	return (
		<form onSubmit={alert}>
			<input
				type="text"
				placeholder="E-mail"
			/>
			<input
				type="text"
				placeholder="Senha"
			/>
			<button>Entrar</button>
		</form>
	);
}