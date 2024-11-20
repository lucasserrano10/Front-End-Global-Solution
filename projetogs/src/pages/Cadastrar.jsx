import styled from "styled-components"
import FaixaAzul from "../components/FaixaAzul"

const Container = styled.div`
    padding-top:50px;
`;
const Cadastrar = () => {
    return (
    <>
    <Container>
        <FaixaAzul titulo="ÁREA DE CADASTRO" paragrafo="Cadastre-se e receba conteúdo semanal do nosso newsletter sobre nossa revolução energética que faremos juntos com esse incrível projeto !"></FaixaAzul>
    </Container>
    </>
    )
}

export default Cadastrar
