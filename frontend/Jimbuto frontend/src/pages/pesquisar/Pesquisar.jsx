import Cabecalho from "../../componentes/cabecalho/cabecalho";
import "./Pesquisar.css";
import { Search, MapPin, Check } from "lucide-react";
import foto from "../../public/IMG-20251112-WA0051~2.jpg";


export default function Pesquisar() {
  return (
    <>
      <Cabecalho />
      <div className="pesquisar">
        <div className="search">
          <label htmlFor="pesquisar">Pesquisar por Entidades</label>
          <div className="barra-de-pesquisa">
            <button className="botao-pesquisar">
              <Search size={30} color="#888f9a" />
            </button>
            <input
              type="text"
              name="pesquisar"
              id="pesquisar"
              placeholder="Pesquisar com username"
            />
          </div>
        </div>
        <div className="encontrado">
          <div className="card-encontrados">
            <div className="informacao-geral-procurado">
              <button className="botao-imagem-perfil">
                <img src={foto} alt="" className="foto-procurado" />
              </button>
              <div className="informacao-procurado">
                <div className="inf-name">
                  <p className="nome-procurado">Ebenezer Albino </p>
                  <div className="priv-icon">
                    <Check size={20} color="#ffffff"/>
                  </div>
                </div>
                <p className="emaiil-pais-seguidores-procurado">
                  ebbendje@gmail.com
                </p>
                <p className="emaiil-pais-seguidores-procurado">
                  <MapPin /> Angola - 12345 seguidores{" "}
                </p>
              </div>
            </div>
            <button className="botao-seguir">Seguir</button>
          </div>
        </div>
      </div>
    </>
  );
}
