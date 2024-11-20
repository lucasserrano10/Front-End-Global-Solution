import styled from "styled-components"
import FaixaAzul from "../components/FaixaAzul"

const Container = styled.div`
    padding-top:50px;
`;

const Login = () => {
    return (
    <>
    <Container>
        <FaixaAzul titulo="ÁREA DE LOGIN" paragrafo="Faça o Login para continuar recebendo nossas novidades !"></FaixaAzul>
    </Container>
    </>
    )
}

export default Login
