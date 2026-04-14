import Cabecalho from "../../componentes/cabecalho/cabecalho";
import "./Perfil.css";
import foto from "../../public/IMG-20251112-WA0051~2.jpg";
import { User2, Mail, MapPin, Pen, Globe, PlusIcon, Check } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Perfil() {
  return (
    <div className="perfil">
      <Cabecalho />

      <div className="card-perfil">
        <div className="imagem-perfil">
          <img src={foto} />
          <div className="priv">
            <Check size={30} /> 
          </div>
        </div>

        <div className="informacoes-perfil">
          <div className="inf-user">
            <p className="inf-label">
              <User2 /> Username
            </p>
            <p className="texto-inf-user">Ebenezer Albino</p>
          </div>

          <div className="inf-user">
            <p className="inf-label">Bibliografia</p>
            <p className="texto-inf-user">
              <Pen /> Está é a minha bibliografia
            </p>
          </div>

          <div className="inf-user">
            <p className="inf-label">
              <Mail /> Email
            </p>
            <p className="texto-inf-user">ebbendje@gmail.com</p>
          </div>

          <div className="inf-user">
            <p className="inf-label"> Pais</p>
            <p className="texto-inf-user">
              <MapPin /> Angola
            </p>
          </div>
        </div>

        <div className="redes-sociais">
          <p className="inf-label">
            {" "}
            <Globe /> Redes Sociais
          </p>
          <div className="redesSociais">
            <div className="redes">
              <NavLink className="link-redes" to=""></NavLink>
              <NavLink className="link-redes" to=""></NavLink>
              <NavLink className="link-redes" to=""></NavLink>
              <NavLink className="link-redes" to=""></NavLink>
              <NavLink className="link-redes" to=""></NavLink>
              <NavLink className="link-redes" to=""></NavLink>
            </div>
            <button className="botao-add-rede">
              <PlusIcon />
            </button>
          </div>
        </div>

        <hr />

        <div className="estatisticas-perfil">
          <div className="estatistica-quantidade">
            <p className="texto-inf-user">156</p>
            <p className="inf-label">Publicações</p>
          </div>

          <div className="estatistica-quantidade">
            <p className="texto-inf-user">2.4k</p>
            <p className="inf-label">Seguidores</p>
          </div>

          <div className="estatistica-quantidade">
            <p className="texto-inf-user">342</p>
            <p className="inf-label">Seguindo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
