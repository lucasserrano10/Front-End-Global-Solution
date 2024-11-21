import React, { useState } from 'react';
import styled from 'styled-components';
import FaixaAzul from "../components/FaixaAzul";
import CryptoJS from 'crypto-js';

const Container = styled.div`
    padding-top: 50px;
`;

const ContainerLogin = styled.div`
    background-color: white;
    width: 50vw;
    height: 60vh;
    margin: 30px auto;
    border-radius: 25px;
    box-shadow: 3px 3px 3px black;
    padding: 20px;

    h1 {
        text-align: center;
        font-size: 24px;
        font-family: poppins;
        font-weight: 900;
    }

    p {
        text-align: center;
        font-size: 16px;
        font-family: "Sour-gummy";
        font-weight: 500;
    }
`;

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const handleLogin = () => {
        const encryptedEmail = CryptoJS.AES.encrypt(email, 'secret-key').toString();
        const encryptedPassword = CryptoJS.AES.encrypt(password, 'secret-key').toString();

        localStorage.setItem('userEmail', encryptedEmail);
        localStorage.setItem('userPassword', encryptedPassword);

        setIsLoggedIn(true);
        alert('Login bem-sucedido!');
    };
    const handleLogout = () => {
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userPassword');
        setIsLoggedIn(false);
        alert('Logout bem-sucedido!');
    };

    return (
        <>
            <Container>
                <FaixaAzul
                    titulo="ÁREA DE LOGIN"
                    paragrafo="Faça o Login para continuar recebendo nossas novidades!"
                />
            </Container>
            <ContainerLogin>
                <h1>Área de Login</h1>
                <p>Faça seu login em nosso site e continue fazendo parte da maior revolução energética já vista</p>

                {!isLoggedIn ? (
                    <div>
                        <input
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
                        />
                        <button
                            onClick={handleLogin}
                            style={{
                                width: '100%',
                                padding: '10px',
                                backgroundColor: '#4CAF50',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            Login
                        </button>
                    </div>
                ) : (
                    <div>
                        <p>Bem-vindo! Você está logado.</p>
                        <button
                            onClick={handleLogout}
                            style={{
                                width: '100%',
                                padding: '10px',
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                marginTop: '30px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            Logout
                        </button>
                    </div>
                )}
            </ContainerLogin>
        </>
    );
};

export default Login;
