import SideBar from "./components/SideBar";
import "./App.css";
import BarraDePesquisa from "./components/BarraDePesquisa";
import Filtro from "./components/Filtro";
import Ordenacao from "./components/Ordenação";
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <SideBar />
      <div>
        <BarraDePesquisa />
        <Filtro />
        <Ordenacao />
        <Card />
      </div>
    </div>
  );
}

export default App;
