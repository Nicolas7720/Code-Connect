import Logo from "./assets/Logo.svg";
import Feed from "./assets/feed.svg";
import Perfil from "./assets/account_circle.svg";
import Info from "./assets/info.svg";
import Logout from "./assets/logout.svg";
import { FC } from "react";
import Item from "./ItemSideBar/Item";
import "./styles.css";

const SideBar: FC = () => {
  return (
    <aside>
      <img src={Logo} alt="Logo do CodeConnect" />
      <nav>
        <ul className="lista-sidebar">
          <li>
            <a href="#" className="lista__item--publicacao">
              Publicar
            </a>
          </li>
          <Item
            texto="Feed"
            src={Feed}
            className="lista__link lista__link--ativo"
          />
          <Item texto="Perfil" src={Perfil} className="lista__link" />
          <Item texto="Info" src={Info} className="lista__link" />
          <Item texto="Logout" src={Logout} className="lista__link" />
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
