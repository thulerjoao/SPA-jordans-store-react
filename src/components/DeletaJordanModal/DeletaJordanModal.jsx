import "./DeletaJordanModal.css";
import Modal from "components/Modal/Modal";
import { JordanService } from "services/JordanService";

function DeletaJordanModal({ closeModal, jordanParaDeletar, onDeleteJordan }) {
  const handleDelete = async (jordan) => {
    await JordanService.deleteById(jordan.id);
    onDeleteJordan(jordan);
    closeModal();
  };
  return (
    <Modal closeModal={closeModal}>
      <div className="DeletaJordanModal">
        <h2>Confirmação</h2>
        <p>Deseja excluir o seguinte Jordan permanentemente?</p>
        <div className="DeletaJordanModal__fotoModelo">
          <img
            className="DeletaJordanModal__foto"
            src={jordanParaDeletar.foto}
            alt={jordanParaDeletar.modelo}
          />
          <p>{jordanParaDeletar.modelo}</p>
        </div>

        <br />

        <div>
          <button
            onClick={() => handleDelete(jordanParaDeletar)}
            className="DeletaJordanModal__confirmar"
          >
            {" "}
            Confirmar{" "}
          </button>
          <button onClick={closeModal} className="DeletaJordanModal__cancelar">
            {" "}
            Cancelar{" "}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeletaJordanModal;
