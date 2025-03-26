import { FC } from "react";
import "./styles.css";
import Capa from "./assets/capa.png";
import Code from "./assets/code.svg";
import Chat from "./assets/chat.svg";
import Share from "./assets/share.svg";
import Usuario from "./assets/icone.png";

const Card: FC = () => {
  return (
    <article className="card">
      <div className="card__imagem">
        <img src={Capa} alt="Imagem do post" />
      </div>
      <div className="card__conteudo">
        <div className="conteudo__texto">
          <h3>Titulo o post</h3>
          <p>Resumo do post</p>
        </div>
        <div className="conteudo__rodape">
          <ul>
            <li>
              <img src={Code} alt="Códigos" />
              100
            </li>
            <li>
              <img src={Share} alt="Compartilhamentos" />
              12
            </li>
            <li>
              <img src={Chat} alt="Comentarios" />
              10
            </li>
          </ul>
          <div className="rodape__usuario">
            <img src={Usuario} alt="imagem do usuário" />
            @nicolas
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
