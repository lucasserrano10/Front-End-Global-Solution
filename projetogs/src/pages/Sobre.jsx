import styled from "styled-components"
import FaixaAzul from "../components/FaixaAzul"
import Quiz from "../components/Quiz";

const Container = styled.div`
    padding-top:50px;
`;


const Sobre = () => {
    return (
    <>
    <Container>
        <FaixaAzul titulo="Sobre" paragrafo="Um Pequeno Quiz para aprender um pouco de nosso projeto"></FaixaAzul>
    </Container>
    <Quiz/>
    </>
    )
}

export default Sobre
