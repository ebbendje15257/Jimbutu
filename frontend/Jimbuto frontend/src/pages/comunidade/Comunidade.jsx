import "./comunidade.css";
import Cabecalho from "../../componentes/cabecalho/cabecalho";
import {
  Send,
  LucidePaperclip,
  Check,
  ThumbsUp,
  MessageSquare,
  Share2,
  MoreVertical,
  X,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import foto from "../../public/IMG-20251112-WA0051~2.jpg";

/* ---------- dados de exemplo ---------- */



export default function Comunidade() {
  const [verfotoPost, setVerfotoPost]             = useState(null);
  const [fotoPost, setFotoPost]                   = useState(null);
  const [activo, SetActivo]                       = useState(false);
  const [activarComentario, setActivarComentario] = useState(false);
  const [like, setLike]                           = useState(false);
 

  const escolherImg = (e) => {
    const arquivo = e.target.files[0];
    if (arquivo) {
      setVerfotoPost(URL.createObjectURL(arquivo));
      setFotoPost(arquivo);
    }
  };

  const enviarComentario = () => {
    
  };

  

  return (
    <div className="container-comunidade">
      <Cabecalho />

      {/* ===== Overlay + Sidebar de Comentários ===== */}
      {activarComentario && (
        <>
          <div
            className="overlay-comentarios"
            
          />

          <aside className="aba-comentarios">
            {/* Cabeçalho */}
            <div className="aba-comentarios-header">
              <h2>Comentários</h2>
              <button
                className="btn-fechar-comentarios"
                onClick={() => setActivarComentario(false)}
              >
                <X size={22} />
              </button>
            </div>

          
            <div className="lista-comentarios">
              
                <div className="comentario">

                  <div
                    className="comentario-avatar"
                  />
                  <div className="comentario-corpo">
                    <div className="comentario-header">
                      <span className="comentario-nome"></span>
                      <span className="comentario-username"></span>
                    </div>
                    <p className="comentario-texto"></p>
                    <div className="comentario-acoes">
                      <span></span>
                      <button></button>
                    </div>
                  </div>
                </div>
              
            </div>

            {/* Input de comentário */}
            <div className="input-comentario-wrapper">
              
              <div className="input-comentario-row">
                <input
                  className="input-comentario"
                  type="text"
                  placeholder="Escreva um comentário..."
                 
                
                />
                <button
                  className="btn-enviar-comentario"
                  onClick={enviarComentario}
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </aside>
        </>
      )}

      {/* ===== Feed ===== */}
      <div className="comunidade">
        {/* Caixa de publicação */}
        <div className="pubicacao">
          <div className="publicarIMG">
            <NavLink to="/Perfil">
              <img className="foto-perfil-publicacao" src={foto} alt="perfil" />
            </NavLink>

            <div className="barra-de-publicacao">
              <textarea
                name="text-post"
                id="texto-post"
                cols={55}
                placeholder="O que está acontecer?"
              />
              <button
                onClick={() => SetActivo(false)}
                className="enviar-post"
              >
                <Send size={40} />
              </button>
            </div>

            <label onClick={() => SetActivo(true)} htmlFor="ficheiro-post">
              <LucidePaperclip className="upFiles" size={30} />
            </label>
            <input
              type="file"
              name="ficheiro-post"
              id="ficheiro-post"
              accept="image/*"
              onChange={escolherImg}
            />
          </div>
          <img
            id="idVerImg"
            src={verfotoPost}
            className={activo ? "" : "verImg"}
            alt=""
          />
        </div>

        {/* Post */}
        <div className="feed">
          <div className="post">
            <div className="cabecalho-post">
              <div className="img-nome">
                <img src={foto} className="Img-pefil-post" alt="perfil" />
                <div className="nome-data-post">
                  <div className="inf-name">
                    <p className="nome-procurado">Ebenezer Albino</p>
                    <div className="priv-icon">
                      <Check size={12} color="#ffffff" />
                    </div>
                  </div>
                  <p className="emaiil-pais-seguidores-procurado">Apouquinho</p>
                </div>
              </div>
              <p className="opcao-post">
                <MoreVertical />
              </p>
            </div>

            <p className="text-post">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem,
              reprehenderit consequatur qui recusandae esse suscipit optio cum
              voluptatum repellat eligendi ipsum dolor explicabo dicta alias id
              sed officiis fugiat deleniti?
            </p>

            <img className="Img-postada" src={foto} alt="post" />

            <div className="interacao-post">
              <button onClick={() => setLike(!like)} className="like">
                <ThumbsUp size={22} color={like ? "#05d08c" : "white"} />
                <span className="count">235</span>
              </button>
              <button
                onClick={() => setActivarComentario(true)}
                className="comentearios"
              >
                <MessageSquare size={22} />
                <span className="count">45</span>
              </button>
              <button className="repartilhar">
                <Share2 size={22} />
                <span className="count">12</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}