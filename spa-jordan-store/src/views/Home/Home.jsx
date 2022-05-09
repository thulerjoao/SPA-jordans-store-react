import { useState } from "react";
import JordanLista from "components/JordanLista/JordanLista";
import Navbar from "components/Navbar/Navbar";
import DeletaJordanModal from "components/DeletaJordanModal/DeletaJordanModal";
import Footer from "components/Footer/Footer";
import AdicionaEditaJordanModal from "components/AdicionaEditaJordanModal/AdicionaEditaJordanModal"
import { ActionMode } from "constants/index";
import "./Home.css";

function Home() {
  const [canShowAdicionaJordanModal, setCanShowAdicionaJordanModal] = useState(false);
  const [jordanParaAdicionar, setJordanParaAdicionar] = useState();
  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);
  const [jordanEditado, setJordanEditado] = useState();
  const [jordanRemovido, setJordanRemovido] = useState();


  const handleActions = (action) => {
    const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
    setModoAtual(novaAcao);
  }

  const [jordanParaEditar, setJordanParaEditar] = useState();
  const [jordanParaDeletar, setJordanParaDeletar] = useState();

  const handleDeleteJordan = (jordanToDelete) => {
    setJordanParaDeletar(jordanToDelete);
  }
  
  const handleUpdateJordan = (jordanToUpdate) => {
    setJordanParaEditar(jordanToUpdate);
    setCanShowAdicionaJordanModal(true);
  }

  const handleCloseModal = () => {
    setCanShowAdicionaJordanModal(false);
    setJordanParaAdicionar();
    setJordanParaDeletar();
    setJordanParaEditar();
    setModoAtual(ActionMode.NORMAL);
  }

  return (
    <div className="Home">
      <div className="Navbar__container">
      <Navbar
        mode ={modoAtual} 
        createJordan ={() => setCanShowAdicionaJordanModal(true)}
        updateJordan={() =>  handleActions(ActionMode.ATUALIZAR)}
        deleteJordan={() =>  handleActions(ActionMode.DELETAR)} />
      </div>
      <div className="Home__container">
        <JordanLista 
          mode ={modoAtual} 
          jordanCriado={jordanParaAdicionar}
          jordanEditado={jordanEditado}
          jordanRemovido={jordanRemovido}

          deleteJordan={handleDeleteJordan}
          updateJordan={handleUpdateJordan}/>
        {
          canShowAdicionaJordanModal &&
          (<AdicionaEditaJordanModal
            mode={modoAtual}
            jordanToUpdate={jordanParaEditar}
            onUpdateJordan={(jordan) => setJordanEditado(jordan)} 
            closeModal={handleCloseModal}
            onCreateJordan={(jordan) => setJordanParaAdicionar(jordan)}/>)
        }
        {
        jordanParaDeletar &&
        <DeletaJordanModal
            jordanParaDeletar={jordanParaDeletar}
            closeModal={handleCloseModal}
            onDeleteJordan={(jordan) => setJordanRemovido(jordan)}
    />
}
      </div>
      <div className="Footer__container">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
