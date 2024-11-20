import styled from "styled-components";

const Faixa = styled.div`

    background-color: #34495E; 
    padding: 15px;
    text-align: center;
    color: white;
    width: 100vw; 
    height: auto; 
    box-sizing: border-box;
    margin: 0;
    padding-top: 60px;
    font-size: 16px;
    letter-spacing: 0.5px;
    word-wrap: break-word; 
`;

const Titulo = styled.h1`
    font-size: 30px;
    font-weight: bold;
    margin: 0;
    font-family:poppins;
    text-transform: uppercase; 
    padding-bottom: 10px; 
`;

const Paragrafo = styled.p`
    font-size: 15px; 
    font-weight: 500;
    margin-top: 4px;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    line-height: 1.6; 
    text-align: center; 
    word-wrap: break-word; 
    max-width: 800px;
    margin-left: auto;
    margin-right: auto; 
`;

const FaixaAzul = ({ titulo, paragrafo }) => {
    return (
        <Faixa>
            <Titulo>{titulo}</Titulo>
            {paragrafo && <Paragrafo>{paragrafo}</Paragrafo>}
        </Faixa>
    );
};

export default FaixaAzul;
