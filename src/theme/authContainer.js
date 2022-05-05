import styled from 'styled-components';

const AuthContainer = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        gap: 13px;

        margin: 26px 0 36px;

        >* {
            border-radius: 5px;
        }

        >input {
            height: 58px;

            text-indent: 15px;

            font-size: 20px;

            background-color: #FFFFFF;
            ::placeholder {
                color: #000000;
            }
        }

        >button {
            height: 46px;

            font-size: 20px;
            font-weight: 700;
            
            color: #FFFFFF;
            background-color: #A328D6;
        }
    }

    a {
        display: flex;
        justify-content: center;

        font-size: 15px;
        font-weight: 700;

        color: #FFFFFF;
    }
`;

export default AuthContainer;
