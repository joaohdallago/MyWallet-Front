import AuthContainer from '../../theme/authContainer';
import Logo from '../logo';
import Form from './form';
import LinkToSignUp from './link-to-sign-up';

export default function Login() {
	return (
		<AuthContainer>
			<Logo />
			<Form />
			<LinkToSignUp />
		</AuthContainer>
	);
}