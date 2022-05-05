export default function Form() {
	return (
		<form onSubmit={alert}>
			<input
				type="text"
				placeholder="Nome"
			/>
			<input
				type="text"
				placeholder="E-mail"
			/>
			<input
				type="text"
				placeholder="Senha"
			/>
			<input
				type="text"
				placeholder="Confirme a Senha"
			/>
			<button>Entrar</button>
		</form>
	);
}