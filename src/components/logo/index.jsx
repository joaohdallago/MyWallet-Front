import styled from 'styled-components';

export default function Logo() {
	return (
		<Container>
            MyWallet
		</Container>
	);
}

const Container = styled.div`
    display: flex;
    justify-content: center;

    font-size: 32px;
    font-family: 'Saira Stencil One', cursive;
    
    color: #FFFFFF;
`;