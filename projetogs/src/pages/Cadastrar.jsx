import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import FaixaAzul from "../components/FaixaAzul";
import styled from "styled-components";

// Estilo do container
const Container = styled.div`
  padding-top: 50px;
`;

const Cadastrar = () => {
  return (
    <>
      <Container>
        <FaixaAzul
          titulo="ÁREA DE CADASTRO"
          paragrafo="Cadastre-se e receba conteúdo semanal do nosso newsletter sobre nossa revolução energética que faremos juntos com esse incrível projeto!"
        />
      </Container>
    </>
  );
};

export default Cadastrar;
