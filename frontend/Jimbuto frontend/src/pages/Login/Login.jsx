import "./main.css";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // FIX 2
import { User, Lock, Leaf } from "lucide-react";
import api from "../../services/axios";

export default function Login() {
  const inputUser = useRef(null);
  const inputPasse = useRef(null);
  const [vazio, setVazio] = useState(false);
  const [erro, setErro] = useState(false);
  const navigate = useNavigate(); 

  async function Logar(e) {
    e.preventDefault();
    const usuario = {
      username: inputUser.current.value.toLowerCase().trim(),
      passe: inputPasse.current.value.trim(),
    };

    if (!usuario.username.trim() || !usuario.passe.trim()) {
      setVazio(true);
      return;
    }

    setVazio(false);

    try {
      const resposta = await api.post("/login", usuario);
      if (resposta.status === 200) {
        navigate("/comunidade"); 
      }
    } catch (error) {
      console.error("Erro ao logar:", error);
      setErro(true);
    }
  }

  return (
    <div className="login">
      <div className="titulo-login">
        <h1>
          <Leaf className="leaf" /> Jimbuto
        </h1>
        <p>Agricultura Assistida por IA</p>
      </div>
      <form onSubmit={Logar}>
        <h2>Entrar na sua conta</h2>
        <div className="campo">
          <label htmlFor="user">Username</label>
          <div className="inputID">
            <User className="icon" />
            <input
              type="text"
              id="user"
              placeholder="seu_username"
              ref={inputUser}
            />
          </div>
        </div>
        <div className="campo">
          <label htmlFor="pass">Password</label>
          <div className="inputID">
            <Lock className="icon" />
            <input
              type="password"
              id="pass"
              placeholder="********"
              ref={inputPasse}
            />
          </div>
        </div>
        {vazio && <p className="error-msg">Não pode conter campos vazios!</p>}
        {erro && <p className="error-msg">Credenciais inválidas. Tente novamente.</p>}
        <button className="button-entrar" type="submit">
          Entrar
        </button>
      </form>
      <p className="cadastro">
        Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
      </p>
    </div>
  );
}