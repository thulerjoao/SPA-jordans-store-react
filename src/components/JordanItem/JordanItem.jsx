import { ActionMode } from "constants/index";
import "./JordanItem.css";

function JordanItem({
  jordan,
  jordanSelecionado,
  index,
  onRemove,
  onAdd,
  clickItem,
  mode,
}) {
  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="JordanListaItem__badge">{`Quantidade no Carrinho: 0${jordanSelecionado}`}</span>
    );

  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button
        disabled={mode !== ActionMode.NORMAL}
        className="Acoes__remover"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(index);
        }}
      >
        Remover
      </button>
    );

  const badgeAction = (canRender) => {
    if (canRender)
      return (
        <span
          className={`JordanListaItem__tag ${
            mode === ActionMode.DELETAR && "JordanListaItem__tag--deletar"
          }`}
        >
          {" "}
          {mode}{" "}
        </span>
      );
  };

  return (
    <div
      className={`cards ${
        mode !== ActionMode.NORMAL && "JordanListaItem--disable"
      }
      ${mode === ActionMode.DELETAR && "JordanListaItem--deletar"}`}
      onClick={() => clickItem(jordan.id)}
    >
      {badgeCounter(jordanSelecionado, index)}
      {badgeAction(mode != ActionMode.NORMAL)}
      <div className="JordanListaItem__foto">
        <img
          className="JordanListaItem__foto--img"
          src={jordan.foto}
          alt={`Imagem referente ao ${jordan.modelo}`}
        />
      </div>
      <div className="JordanListaItem">
        <div className="JordanListaItem__modelo">{jordan.modelo}</div>
        <div className="JordanListaItem__descricao">{jordan.descricao}</div>
        <div className="JordanListaItem__preco">
          R$ {jordan.preco.toFixed(2)}
          {jordan.preco >= 1990 && (
            <div className="JordanListaItem__freteGratis">Frete Grátis</div>
          )}
        </div>
        <div className="JordanListaItem__acoes Acoes ">
          <button
            disabled={mode !== ActionMode.NORMAL}
            className={`Acoes__adicionar ${
              !jordanSelecionado && "Acoes__adicionar--preencher"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onAdd(index);
            }}
          >
            Adicionar ao Carrinho
          </button>
          {removeButton(jordanSelecionado, index)}
        </div>
      </div>
    </div>
  );
}

export default JordanItem;
