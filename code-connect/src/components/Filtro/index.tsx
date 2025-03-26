import { FC } from "react";
import "./styles.css";

const Filtro: FC = () => {
  return (
    <section className="container-filtro">
      <ul>
        <li>Programação</li>
        <li>React</li>
        <li>Acessibilidade</li>
      </ul>
      <button>Limpar tudo</button>
    </section>
  );
};

export default Filtro;
