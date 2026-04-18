import { Leaf, Home, Map, Users2, Bell, Bot } from "lucide-react";
import "./cabecalho.css";
import { NavLink } from "react-router-dom";
import foto from "../../public/IMG-20251112-WA0051~2.jpg";

export default function Cabecalho() {
  return (
    <div className="cabecalho">
      <div className="titulo-cabecalho">
        <p>
          <Leaf className="leaf" size={40} />
        </p>
        <p>Jimbuto</p>
      </div>

      <div className="pages">
        <NavLink
          className={({ isActive }) => (isActive ? "activo" : "nav-pages")}
          to="/comunidade"
        >
          <Home className="icon-nav" /> Comunidade
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "activo" : "nav-pages")}
          to="/"
        >
          <Map className="icon-nav" /> Mapas
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "activo" : "nav-pages")}
          to="/pesquisar"
        >
          <Users2 className="icon-nav" /> Pessoas
        </NavLink>
      </div>

      <div className="abas">

        <NavLink className="nav-abas" to="/perfil">
          <img className="foto-cabecalho" src={foto} />
        </NavLink>
      </div>
    </div>
  );
}
