import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Login/Cadastro";
import Pesquisar from "./pages/pesquisar/Pesquisar";
import Perfil from "./pages/perfil/Perfil";
import Comunidade from "./pages/comunidade/Comunidade";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pesquisar" element={<Pesquisar />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/comunidade" element={<Comunidade />} />
    </Routes>
  );
}
