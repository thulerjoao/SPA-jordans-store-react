import "./JordanLista.css";
import JordanItem from "components/JordanItem/JordanItem";
import { jordan } from "mocks/jordan";
import React, { useState } from "react";

function JordanLista() {
  const [jordanSelecionado, setJordanSelecionado] = useState({});

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

  return (
    <div className="JordanLista">
      {jordan.map((jordan, index) => (
        <JordanItem
          key={index}
          jordan={jordan}
          jordanSelecionado={jordanSelecionado[index]}
          index={index}
          onAdd={(index) => adicionarItem(index)}
          onRemove={(index) => removerItem(index)}
        />
      ))}
    </div>
  );
}

export default JordanLista;
