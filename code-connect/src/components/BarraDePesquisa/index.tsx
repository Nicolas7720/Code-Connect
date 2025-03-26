import { FC, useState } from "react";
import "./styles.css";

const BarraDePesquisa: FC = () => {
  const [termoPesquisa, setTermoPesquisa] = useState<string>("");
  console.log(termoPesquisa);
  return (
    <div>
      <input
        type="search"
        placeholder="Digite o que você procura"
        className="Barra-pesquisa"
        value={termoPesquisa}
        onChange={(e) => setTermoPesquisa(e.target.value)}
      />
    </div>
  );
};

export default BarraDePesquisa;
