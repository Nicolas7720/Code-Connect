import "./styles.css";
import Code from "./assets/code.svg";
import Chat from "./assets/chat.svg";
import Share from "./assets/share.svg";
// import Usuario from "./assets/icone.png";
// import Capa from "./assets/capa.png"
type UsuarioProps = {
  imagem: string;
  nome: string;
};

export type CardProp = {
  id: number;
  titulo: string;
  imagem_capa: string;
  resumo: string;
  linhas_de_codigo: number;
  compartilhamentos: number;
  comentarios: number;
  usuario: UsuarioProps;
};

const Card = ({
  id,
  titulo,
  imagem_capa,
  resumo,
  linhas_de_codigo,
  compartilhamentos,
  comentarios,
  usuario,
}: CardProp) => {
  return (
    <article className="card" key={id}>
      <div className="card__imagem">
        <img src={imagem_capa} alt="Imagem do post" />
      </div>
      <div className="card__conteudo">
        <div className="conteudo__texto">
          <h3>{titulo}</h3>
          <p>{resumo}</p>
        </div>
        <div className="conteudo__rodape">
          <ul>
            <li>
              <img src={Code} alt="Códigos" />
              {linhas_de_codigo}
            </li>
            <li>
              <img src={Share} alt="Compartilhamentos" />
              {compartilhamentos}
            </li>
            <li>
              <img src={Chat} alt="Comentarios" />
              {comentarios}
            </li>
          </ul>
          <div className="rodape__usuario">
            <img src={usuario.imagem} alt="imagem do usuário" />@{usuario.nome}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
