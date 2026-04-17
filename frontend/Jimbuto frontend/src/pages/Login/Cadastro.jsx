import "./main.css";
import api from "../../services/axios";
import Paises from "../../componentes/Paises";
import { Link } from "react-router-dom";
import { QrCode, Mail, User, Lock, Leaf, Upload } from "lucide-react";
import { useState, useRef } from "react";

export default function Cadastro() {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const paisRef = useRef(null);
  const chaveRef = useRef(null);
  const passRef = useRef(null);
  const confirmPassRef = useRef(null);

  const [verImg, setVerImg] = useState(null);
  const [fotoArquivo, setFotoArquivo] = useState(null);
  const [erro, setErro] = useState(false);
  const [vazio, setVazio] = useState(false);
  const [erroUser, setErroUser] = useState(false);
  const [erroPass, setErroPass] = useState(false);
  const [erroConfirmPass, setErroConfirmPass] = useState(false);
  const [erroEmailexiste, setErroEmailexiste] = useState(false);

  const escolherImg = (e) => {
    const arquivo = e.target.files[0];
    if (arquivo) {
      const urlImagem = URL.createObjectURL(arquivo);
      setVerImg(urlImagem);
      setFotoArquivo(arquivo);
    }
  };

  async function Criar(e) {
    e.preventDefault();

    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const pais = paisRef.current.value;
    const chave = chaveRef.current.value;
    const pass = passRef.current.value;
    const cPassValue = confirmPassRef.current.value;

    setVazio(false);
    setErroUser(false);
    setErroPass(false);
    setErroConfirmPass(false);
    setErroEmailexiste(false);

    if (!username.trim() || !pass.trim() || !cPassValue.trim() || !email.trim() || !pais.trim()) {
      setVazio(true);
      return;
    }
    if (username.length < 2) {
      setErroUser(true);
      return;
    }
    if (pass.length < 8) {
      setErroPass(true);
      return;
    }
    if (pass !== cPassValue) {
      setErroConfirmPass(true);
      return;
    }

    const formData = new FormData();
    if (fotoArquivo) {
      formData.append("foto", fotoArquivo);
    }
    formData.append("username", username);
    formData.append("email", email);
    formData.append("pais", pais);
    formData.append("chave", chave);
    formData.append("passe", pass);

    try {
      const resposta = await api.post("/cadastro", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (resposta.status == 409) {
        setErroEmailexiste(true);
      }
      else if (resposta.status == 201) {
        alert("Usuario criado com sucesso")
      }
      console.log("Sucesso:", resposta);
      alert("Usuario criado com sucesso");
    } catch (error) {
      console.log("Erro ao cadastrar", error);
      setErro(true);
    }
  }

  return (
    <div className="cadastrar">
      <div className="titulo-cadastrar">
        <h1>
          <Leaf className="leaf" /> Jimbuto
        </h1>
        <p>Crie sua conta</p>
      </div>

      <form onSubmit={Criar} className="form-grid">
        <div className="avatar-upload">
          <img id="vImg" src={verImg} alt="" />
          <label className="labelImg" htmlFor="upImg">
            <Upload className="Upload" />
          </label>
          <input
            onChange={escolherImg}
            type="file"
            id="upImg"
            accept="image/*"
          />
        </div>

        <div className="campo">
          <label htmlFor="user">Username</label>
          <div className="inputID">
            <User className="icon" />
            <input
              type="text"
              id="user"
              placeholder="seu_username"
              ref={usernameRef}
            />
          </div>
        </div>

        <div className="campo">
          <label htmlFor="email">Email</label>
          <div className="inputID">
            <Mail className="icon" />
            <input
              type="email"
              id="email"
              placeholder="seu_email"
              ref={emailRef}
            />
          </div>
        </div>

        <div className="campo">
          <label>País</label>
          <div className="inputID">
            <Paises ref={paisRef} />
          </div>
        </div>

        <div className="campo">
          <label>Chave de Acesso</label>
          <div className="key-container">
            <input placeholder="Digite ou escaneie" ref={chaveRef} />
            <button type="button" className="btn-icon">
              <QrCode size={30} />
            </button>
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
              ref={passRef}
            />
          </div>
        </div>

        <div className="campo">
          <label htmlFor="Cpass">Confirmar Password</label>
          <div className="inputID">
            <Lock className="icon" />
            <input
              type="password"
              id="Cpass"
              placeholder="********"
              ref={confirmPassRef}
            />
          </div>
        </div>

        {vazio && (
          <p className="error-msg" style={{ color: "red" }}>
            Não pode conter campos vazios!
          </p>
        )}
        {erroUser && (
          <p className="error-msg" style={{ color: "red" }}>
            O username deve ter pelo menos 2 caracteres!
          </p>
        )}
        {erroPass && (
          <p className="error-msg" style={{ color: "red" }}>
            A senha deve ter mais de 8 caracteres!
          </p>
        )}
        {erroConfirmPass && (
          <p className="error-msg" style={{ color: "red" }}>
            As senhas não são idênticas!
          </p>
        )}
        {erro && (
          <p className="error-msg" style={{ color: "red" }}>
            Erro no servidor. Tente novamente.
          </p>
        )}
        {erroEmailexiste && (
          <p className="error-msg" style={{ color: "red" }}>
            Esse email já possui uma conta!.
          </p>
        )}

        <button type="submit" className="full-width">
          Criar Conta
        </button>
      </form>

      <p className="cadastro">
        Já tem uma conta? <Link to="/login">Entrar</Link>
      </p>
    </div>
  );
}
