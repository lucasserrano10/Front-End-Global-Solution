import styled from "styled-components";
import FaixaAzul from "../components/FaixaAzul";
import SlideShow from "../components/SlideShow";

const Container = styled.div`
  padding-top: 70px;
`;

const Carrossel = styled.div`
  width: 100%;
  height: 100vh; /* Garante que ocupe a altura da tela */
`;

const Home = () => {
  return (
    <>
      <Container>
        <div className="relative flex items-center justify-center text-center bg-black px-6 py-6">
          <div>
            <p className="text-sm text-white">
              <strong className="font-semibold">Eletric Chain Live</strong>
              <svg
                viewBox="0 0 2 2"
                className="mx-2 inline size-0.5 fill-current text-white"
                aria-hidden="true"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              Prepare-se para o futuro! Junte-se a nós no YouTube, do dia 7 a
              10 de dezembro, e descubra o que está por vir.
            </p>
          </div>
        </div>
      </Container>
      <Carrossel>
        <SlideShow />
      </Carrossel>
      <FaixaAzul
        titulo="NOSSA MISSÃO"
        paragrafo="Conheça mais o nosso propósito !"
      />
      
      {/* Seção de Cards */}
      <div className="py-10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-teal-500 ">
            OPORTUNIDADE
            </h3>
            <p className="text-gray-700 text-lg">
            A crescente demanda por soluções energéticas sustentáveis abre espaço para a criação de uma plataforma descentralizada de energia renovável. Por meio da geração local e do uso de tecnologias inovadoras, como IoT e blockchain, é possível democratizar o acesso à energia, permitindo que comunidades produzam e comercializem energia limpa diretamente. Essa abordagem reduz a dependência de grandes corporações, promove a autonomia energética e incentiva práticas mais ecológicas, fortalecendo uma economia mais inclusiva e sustentável.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-teal-500 ">
              A BLOCKCHAIN
            </h3>
            <p className="text-gray-700 text-lg">
            A tecnologia blockchain é o pilar central da solução, garantindo segurança e transparência nas transações de energia entre produtores e consumidores. Contratos inteligentes automatizam e simplificam essas transações, eliminando intermediários e reduzindo custos. Além disso, a introdução de tokens recompensa a produção de energia renovável e incentiva o consumo consciente, criando um modelo financeiro sustentável e acessível para todos os usuários da plataforma.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-teal-500 ">
            IMPACTOS
            </h3>
            <p className="text-gray-700 text-lg">
            A implementação da plataforma descentralizada promove benefícios sociais, econômicos e ambientais. Ao permitir que usuários vendam sua própria energia, os custos energéticos são reduzidos, especialmente em comunidades remotas. A solução também fomenta a criação de empregos no setor de energias renováveis e fortalece a economia local. Além disso, ao incentivar práticas de geração e consumo sustentável, a plataforma contribui diretamente para a redução da pegada de carbono global e para a conscientização sobre a transição energética.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
