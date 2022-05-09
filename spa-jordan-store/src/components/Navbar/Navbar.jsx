import "./Navbar.css";
import { ActionMode } from "constants/index";
import lixeira from "assets/img/trash3.svg" 

function Navbar({createJordan, updateJordan, mode, deleteJordan}) {
  return (
    <header>
      <div className="NavBar__container">
        <img
          className="NavBar__container--icon"
          src={require("assets/img/nike.png")}
          alt="Icone Nike "
        />
        <a href="#" className="NavBar__container--home">
          Home
        </a>
        <button type="button" className="Opcoes_jordan jordan" onClick={() => createJordan() }>
          Cadastrar 
        </button>
        <button type="button" 
                className={`Opcoes__Jordan Jordan ${mode === ActionMode.ATUALIZAR && "Jordan--ativo" }`}
                onClick={() => updateJordan() }>
          Editar 
        </button>
        <button
          type="button"
          className={`Opcoes__jordan Jordan ${mode === ActionMode.DELETAR && 'Jordan--deletar'}`}
          onClick={() => deleteJordan()}>

          <img src={lixeira} width="20px" className="Jordan__lixeira" alt="Deletar jordan" />

        </button>
        <div className="Carrinho__container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart3"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <p>Carrinho</p>
          <i>#</i>
        </div>
      </div>

      <section className="Header__container__01">
        <p id="desconto">Frete Grátis em compras acima de R$ 1990.00!!!</p>
        <h1>Jordan Store</h1>
      </section>
      <section className="Header__container__02">
        <div className="Header__container__02--efectFrase">
          Os mais exclusivos Jordan's você só encontra aqui
        </div>
        <div className="Header__container__02--headerDescription">
          Nunca nenhum tênis teve tanta repercussão e venda quanto o tênis Nike
          Air Jordan, criado para o lendário jogador de basquete Michael Jordan.
        </div>
      </section>
    </header>
  );
}

export default Navbar;
