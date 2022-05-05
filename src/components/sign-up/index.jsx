import AuthContainer from '../../theme/authContainer';

import Logo from '../logo';
import Form from './form';
import LinkToLogin from './link-to-login';

export default function SignUp() {
	return (
		<AuthContainer>
			<Logo />
			<Form />
			<LinkToLogin />
		</AuthContainer>
	);
}