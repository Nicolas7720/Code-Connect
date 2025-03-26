import { FC } from "react";
import "./styles.css";

const Ordenacao: FC = () => {
  return (
    <ul className="lista-ordenacao">
      <li>
        <a
          href="#"
          className="lista-ordenacao__link lista-ordenacao__link--ativo"
        >
          Recentes
        </a>
      </li>
      <li>
        <a href="#" className="lista-ordenacao__link">
          Recentes
        </a>
      </li>
    </ul>
  );
};

export default Ordenacao;
