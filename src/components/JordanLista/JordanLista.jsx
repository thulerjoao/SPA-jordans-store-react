import "./JordanLista.css";
import JordanItem from "components/JordanItem/JordanItem";
import React, { useState, useEffect, useCallback } from "react";
import { JordanService } from "services/JordanService";
import JordanDetalhesModal from "components/JordanDetalhesModal/JordanDetalhesModal";

import { ActionMode } from "constants/index";

function JordanLista({
  jordanCriado,
  mode,
  updateJordan,
  deleteJordan,
  jordanEditado,
  jordanRemovido,
}) {
  const [jordans, setJordans] = useState([]);

  const [jordanSelecionado, setJordanSelecionado] = useState([]);

  const [jordanModal, setJordanModal] = useState(false);

  const adicionarItem = (jordanIndex) => {
    const jordan = {
      [jordanIndex]: Number(jordanSelecionado[jordanIndex] || 0) + 1,
    };
    setJordanSelecionado({ ...jordanSelecionado, ...jordan });
  };

  const removerItem = (jordanIndex) => {
    const jordan = {
      [jordanIndex]: Number(jordanSelecionado[jordanIndex] || 0) - 1,
    };
    setJordanSelecionado({ ...jordanSelecionado, ...jordan });
  };

  const getLista = async () => {
    const response = await JordanService.getLista();
    setJordans(response);
  };

  const getJordanById = async (jordanId) => {
    const response = await JordanService.getById(jordanId);
    const mapper = {
      [ActionMode.NORMAL]: () => setJordanModal(response),
      [ActionMode.ATUALIZAR]: () => updateJordan(response),
      [ActionMode.DELETAR]: () => deleteJordan(response),
    };

    mapper[mode]();
  };

  const adicionaJordanNaLista = useCallback(
    (jordan) => {
      const lista = [...jordans, jordan];
      setJordans(lista);
    },
    [jordans]
  );

  useEffect(() => {
    if (
      jordanCriado &&
      !jordans.map(({ id }) => id).includes(jordanCriado.id)
    ) {
      adicionaJordanNaLista(jordanCriado);
    }
  }, [adicionaJordanNaLista, jordanCriado, jordans]);

  useEffect(() => {
    getLista();
  }, [jordanEditado, jordanRemovido]);

  return (
    <div className="JordanLista">
      {jordans.map((jordan, index) => (
        <JordanItem
          mode={mode}
          key={`JordanItem - ${index}`}
          jordan={jordan}
          jordanSelecionado={jordanSelecionado[index]}
          index={index}
          onAdd={(index) => adicionarItem(index)}
          onRemove={(index) => removerItem(index)}
          clickItem={(jordanId) => getJordanById(jordanId)}
        />
      ))}

      {jordanModal && (
        <JordanDetalhesModal
          jordan={jordanModal}
          closeModal={() => setJordanModal(false)}
        />
      )}
    </div>
  );
}

export default JordanLista;
