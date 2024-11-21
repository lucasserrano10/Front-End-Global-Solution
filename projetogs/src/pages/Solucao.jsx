import styled from "styled-components";
import FaixaAzul from "../components/FaixaAzul";

const Container = styled.div`
  padding-top: 50px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  padding: 0 40px; /* Espaço nas laterais */
`;

const Card = styled.div`
  background-color: #34495e;
  color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h3{
    font-family:poppins;
    font-size: 26px;
    font-weight: 900;
  }

  p{
  font-family: "Roboto-mono";
  font-weight: 300;
  }
`;

const Banner = styled.div`
    width:100%;
    background-color:white;
    height:30vh;
    margin: 40px 0px 40px 0px;
    font-family: "Silkscreen";
`;

const PrimeiroTitulo = styled.h1`
    font-size:64px;
    text-align: center;
    text-shadow: 1px 1px black;
    margin: 5px;
`;

const Solucao = () => {
  return (
    <>
      <Container>
        <FaixaAzul
          titulo="Solução"
          paragrafo="Aqui você pode encontrar tudo sobre nosso projeto"
        ></FaixaAzul>
        <CardContainer>
          <Card>
            <h3>Oportunidade de Transformação</h3>
            <p>A necessidade urgente de soluções energéticas sustentáveis nos leva a repensar como a energia é produzida e consumida. Nosso projeto visa democratizar o acesso à energia renovável por meio de um modelo descentralizado, permitindo que comunidades locais gerem, utilizem e comercializem energia limpa diretamente. Essa abordagem reduz a dependência de grandes corporações, promove práticas ecológicas e fomenta uma economia mais inclusiva e sustentável.</p>
          </Card>
          <Card>
            <h3>A Revolução com Blockchain</h3>
            <p>A tecnologia blockchain é a base da nossa solução, garantindo transparência e segurança em todas as transações de energia. Por meio de dispositivos IoT, a produção de energia renovável é registrada na blockchain e convertida em tokens, que podem ser utilizados ou comercializados. Transações automáticas, realizadas por contratos inteligentes, eliminam intermediários e tornam o processo simples e acessível a todos os usuários.</p>
          </Card>
        </CardContainer>
        <Banner>
            <PrimeiroTitulo>--BLOCKCHAIN--</PrimeiroTitulo>
            <PrimeiroTitulo>--ENERGIA--</PrimeiroTitulo>
        </Banner>
        <CardContainer>
            <Card>
            <h3>Impacto Sustentável e Inclusivo</h3>
            <p>A plataforma traz benefícios significativos para as comunidades, reduzindo custos energéticos e criando oportunidades de geração de renda. Além de impulsionar empregos no setor de energia renovável, o projeto fortalece a economia local e promove a conscientização sobre práticas sustentáveis. Essa solução descentralizada contribui diretamente para a redução das emissões de carbono e para a estabilidade da rede elétrica global.</p>
          </Card>
        </CardContainer>
      </Container>
    </>
  );
};

export default Solucao;
