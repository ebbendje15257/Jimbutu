import Cabecalho from "../../componentes/cabecalho/cabecalho";
import "./Pesquisar.css";
import { Search, MapPin, Check } from "lucide-react";
import foto from "../../public/IMG-20251112-WA0051~2.jpg";
import { useState, useMemo } from "react";

/* ============================================================
   BASE DE DADOS DE UTILIZADORES (simulada)
   ============================================================ */
const UTILIZADORES = [
  { id: 1, nome: "Ebenezer Albino", username: "@ebenezer", email: "ebbendje@gmail.com", pais: "Angola", seguidores: 12345, verificado: true,  foto },
  { id: 2, nome: "João Silva",      username: "@joaosilva", email: "joao@gmail.com",    pais: "PT",    seguidores: 8430,  verificado: true,  foto },
  { id: 3, nome: "Ana Santos",      username: "@anasantos", email: "ana@gmail.com",     pais: "BR",    seguidores: 3210,  verificado: false, foto },
  { id: 4, nome: "Maria Costa",     username: "@mariacosta",email: "maria@gmail.com",   pais: "PT",    seguidores: 560,   verificado: false, foto },
  { id: 5, nome: "Pedro Alves",     username: "@pedroalves",email: "pedro@gmail.com",   pais: "Angola",seguidores: 1890,  verificado: true,  foto },
  { id: 6, nome: "Carlos Mendes",   username: "@carlosm",   email: "carlos@gmail.com",  pais: "MZ",   seguidores: 4200,  verificado: false, foto },
];

const FILTROS = ["Todos", "Verificados", "Angola", "PT", "BR"];

/* Formata número: 12345 → "12.3k" */
const formatarSeguidores = (n) =>
  n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);

/* ============================================================
   COMPONENTE
   ============================================================ */
export default function Pesquisar() {
  const [query, setQuery]           = useState("");          // texto digitado
  const [filtroActivo, setFiltro]   = useState("Todos");     // filtro seleccionado
  const [seguindo, setSeguindo]     = useState(new Set());   // IDs que estamos a seguir

  /* useMemo → só recalcula quando query ou filtroActivo mudam */
  const resultados = useMemo(() => {
    const termo = query.toLowerCase().trim();

    return UTILIZADORES.filter((u) => {
      // Filtro de texto: nome ou username contêm o termo
      const passaTexto =
        termo === "" ||
        u.nome.toLowerCase().includes(termo) ||
        u.username.toLowerCase().includes(termo);

      // Filtro de categoria
      const passaFiltro =
        filtroActivo === "Todos"       ? true :
        filtroActivo === "Verificados" ? u.verificado :
        u.pais === filtroActivo;

      return passaTexto && passaFiltro;
    });
  }, [query, filtroActivo]);

  /* Toggle seguir/deixar de seguir */
  const toggleSeguir = (id) => {
    setSeguindo((prev) => {
      const copia = new Set(prev);
      copia.has(id) ? copia.delete(id) : copia.add(id);
      return copia;
    });
  };

  return (
    <>
      <Cabecalho />
      <div className="pesquisar">

        {/* ===== Caixa de pesquisa ===== */}
        <div className="search">
          <label htmlFor="pesquisar">Pesquisar por Pessoas</label>

          <div className="barra-de-pesquisa">
            <button className="botao-pesquisar" aria-label="Pesquisar">
              <Search size={24} color="#888f9a" />
            </button>
            <input
              type="text"
              id="pesquisar"
              placeholder="Pesquisar com nome ou username..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {/* Filtros rápidos */}
          <div className="filtros-pesquisa">
            {FILTROS.map((f) => (
              <button
                key={f}
                className={`btn-filtro ${filtroActivo === f ? "activo-filtro" : ""}`}
                onClick={() => setFiltro(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* ===== Resultados ===== */}
        <div className="encontrado">
          {resultados.length === 0 ? (
            <p className="sem-resultados">Nenhum utilizador encontrado para "{query}"</p>
          ) : (
            resultados.map((u) => (
              <div className="card-encontrados" key={u.id}>
                <div className="informacao-geral-procurado">
                  <button className="botao-imagem-perfil">
                    <img src={u.foto} alt={u.nome} className="foto-procurado" />
                  </button>

                  <div className="informacao-procurado">
                    <div className="inf-name">
                      <p className="nome-procurado">{u.nome}</p>
                      {u.verificado && (
                        <div className="priv-icon">
                          <Check size={14} color="#ffffff" />
                        </div>
                      )}
                    </div>
                    <p className="emaiil-pais-seguidores-procurado email">
                      {u.username} · {u.email}
                    </p>
                    <p className="emaiil-pais-seguidores-procurado">
                      <MapPin size={13} /> {u.pais} · {formatarSeguidores(u.seguidores)} seguidores
                    </p>
                  </div>
                </div>

                <button
                  className={`botao-seguir ${seguindo.has(u.id) ? "seguindo" : "nao-seguindo"}`}
                  onClick={() => toggleSeguir(u.id)}
                >
                  {seguindo.has(u.id) ? "A seguir" : "Seguir"}
                </button>
              </div>
            ))
          )}
        </div>

      </div>
    </>
  );
}