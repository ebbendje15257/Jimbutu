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
        {/* Foto + badge */}
        <div className="imagem-perfil">
          <img src={foto} alt="foto de perfil" />
          <div className="priv">
            <Check size={22} />
          </div>
        </div>

        {/* Informações */}
        <div className="informacoes-perfil">
          <div className="inf-user">
            <p className="inf-label">
              <User2 size={16} /> Username
            </p>
            <p className="texto-inf-user">Ebenezer Albino</p>
          </div>

          <div className="inf-user">
            <p className="inf-label">
              <Pen size={16} /> Bibliografia
            </p>
            <p className="texto-inf-user">Esta é a minha bibliografia</p>
          </div>

          <div className="inf-user">
            <p className="inf-label">
              <Mail size={16} /> Email
            </p>
            <p className="texto-inf-user">ebbendje@gmail.com</p>
          </div>

          <div className="inf-user">
            <p className="inf-label">
              <MapPin size={16} /> País
            </p>
            <p className="texto-inf-user">Angola</p>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="redes-sociais">
          <p className="inf-label">
            <Globe size={16} /> Redes Sociais
          </p>
          <div className="redesSociais">
            <div className="redes">
              <NavLink className="link-redes" to="" />
              <NavLink className="link-redes" to="" />
              <NavLink className="link-redes" to="" />
              <NavLink className="link-redes" to="" />
              <NavLink className="link-redes" to="" />
              <NavLink className="link-redes" to="" />
            </div>
            <button className="botao-add-rede" aria-label="Adicionar rede social">
              <PlusIcon size={22} />
            </button>
          </div>
        </div>

        <hr />

        {/* Estatísticas */}
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