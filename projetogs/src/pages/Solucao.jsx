import styled from "styled-components"
import FaixaAzul from "../components/FaixaAzul"

const Container = styled.div`
    padding-top:50px;
`

const Solucao = () => {
    return (
    <>
    <Container>
        <FaixaAzul titulo="Solução" paragrafo="Aqui você pode encontrar tudo sobre nosso projeto"></FaixaAzul>
    </Container>
    </>
    )
}

export default Solucao
