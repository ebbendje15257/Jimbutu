import "./comunidade.css";
import Cabecalho from "../../componentes/cabecalho/cabecalho";
import {
  Send,
  LucidePaperclip,
  Check,
  ThumbsUp,
  MessageSquare,
  Share,
  Share2,
  MoreVertical,
} from "lucide-react";
import { useState } from "react";
import {} from "react-router-dom";
import foto from "../../public/IMG-20251112-WA0051~2.jpg";

export default function Comunidade() {
  const [verfotoPost, setVerfotoPost] = useState(null);
  const [fotoPost, setFotoPost] = useState(null);
  const [activo, SetActivo] = useState(false);
  const [activarComentario, setActivarComentario] = useState(false);

  const escolherImg = (e) => {
    const arquivo = e.target.files[0];
    if (arquivo) {
      const urlImagem = URL.createObjectURL(arquivo);
      setVerfotoPost(urlImagem);
      setFotoPost(arquivo);
    }
  };

  return (
    <div className="container-comunidade">
      <Cabecalho />
      {
        activarComentario && (
          <div className="aba-comentarios">
            <div className="cabecalho-comentarios">
              <p>Comentarios</p>
              <button onClick={setActivarComentario()}>X</button>
            </div>
          </div>
        )
      }
      <div className="comunidade">
        <div className="pubicacao">
          <div className="publicarIMG">
            <img className="foto-perfil-publicacao" src={foto} />
            <div className="barra-de-publicacao">
              <textarea
                name="text-post"
                id="texto-post"
                cols={55}
                placeholder="O que está acontecer?"
              />
              <button onClick={() => SetActivo(false)} className="enviar-post">
                <Send className="send" size={40} />
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
          />
        </div>

        <div className="feed">
          <div className="post">
            <div className="cabecalho-post">
              <div className="img-nome">
                <img src={foto} className="Img-pefil-post" />
                <div className="nome-data-post">
                  <div className="inf-name">
                    <p className="nome-procurado">Ebenezer Albino </p>
                    <div className="priv-icon">
                      <Check size={20} color="#ffffff" />
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

            <img className="Img-postada" src={foto} />

            <div className="interacao-post">
              <button className="like">
                <ThumbsUp size={30} />
              </button>
              <button onClick={()=>setActivarComentario(true)} className="comentearios">
                <MessageSquare size={30} />
              </button>
              <button className="repartilhar">
                <Share2 size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
