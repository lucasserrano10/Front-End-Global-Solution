import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import FaixaAzul from "../components/FaixaAzul";
import styled from "styled-components";


const Container = styled.div`
  padding-top: 50px;
`;

const Formulario = styled.div`
  background-color: white;
  margin: auto;
  width: 700px;
  border-radius: 25px;
  padding: 25px;
  text-align: center;
  margin-top: 40px;

  h1 {
    letter-spacing: 0.8px;
    font-size: 1.9rem;
    font-weight: 800;
    font-family: poppins;
  }

  p {
    font-size: 1.2rem;
    font-weight: 900;
    padding: 10px;
    font-family: "Doto";
  }

  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 1rem;
    }

    button {
      background-color: #4caf50;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 5px;
      font-size: 1.1rem;
      cursor: pointer;
    }

    button:hover {
      background-color: #45a049;
    }
  }
`;

const TextoVerde = styled.span`
  color: #1ABC9C;
`;

const Cadastrar = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    idade: "",
    telefone: "",
  });

  const { httpConfig, loading, error } = useFetch("http://localhost:3000/usuarios");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    httpConfig(formData, "POST"); 
    alert("Cadastro realizado com sucesso!");
    setFormData({ nome: "", email: "", idade: "", telefone: "" }); 
  };
  return (
    <>
      <Container>
        <FaixaAzul
          titulo="ÁREA DE CADASTRO"
          paragrafo="Cadastre-se e receba conteúdo semanal do nosso newsletter sobre nossa revolução energética que faremos juntos com esse incrível projeto!"
        />
      </Container>
      <Formulario>
        <h1>Faça o Cadastro</h1>
        <p>Faça o cadastro e receba informações semanalmente por meio do nosso <TextoVerde>NewsLetter</TextoVerde>
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Nome completo"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="idade"
            placeholder="Idade"
            value={formData.idade}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="telefone"
            placeholder="Número de Telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Cadastrar"}
          </button>
        </form>
        {error && <p style={{ color: "red" }}>Erro ao cadastrar: {error}</p>}
      </Formulario>
    </>
  );
};

export default Cadastrar;
