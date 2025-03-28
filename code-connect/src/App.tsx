import SideBar from "./components/SideBar";
import "./App.css";
import BarraDePesquisa from "./components/BarraDePesquisa";
import Filtro from "./components/Filtro";
import Ordenacao from "./components/Ordenação";
import Card, { CardProp } from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const [dados, setDados] = useState<CardProp[]>([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes"
    )
      .then((resposta) => resposta.json())
      .then((data) => setDados(data));
  }, []);
  console.log(dados);

  return (
    <div className="container">
      <SideBar />
      <div>
        <BarraDePesquisa />
        <Filtro />
        <Ordenacao />
        <ul className="lista-cards">
          {dados.map((Item, index) => (
            <li key={index}>
              <Card
                id={Item.id}
                titulo={Item.titulo}
                imagem_capa={Item.imagem_capa}
                resumo={Item.resumo}
                linhas_de_codigo={Item.linhas_de_codigo}
                compartilhamentos={Item.compartilhamentos}
                comentarios={Item.comentarios}
                usuario={Item.usuario}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
//https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes
