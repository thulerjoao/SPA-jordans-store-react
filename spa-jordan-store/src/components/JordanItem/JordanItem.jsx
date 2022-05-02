import './JordanItem.css'

function JordanItem ({jordan, jordanSelecionado, index, onRemove, onAdd}) {    

        const badgeCounter = (canRender, index) =>
        Boolean(canRender) && (<span className='JordanListaItem__badge'>{`Quantidade no Carrinho: 0${jordanSelecionado}`}</span>)

        const removeButton = (canRender, index) =>
        Boolean(canRender) && (<button className='Acoes__remover' onClick={()=> onRemove(index)}>Remover</button>)

    return(
        <div className='cards'>
                    {badgeCounter(jordanSelecionado, index)}
                <div className='JordanListaItem__foto'>
                    <img className='JordanListaItem__foto--img' src={jordan.foto} alt={`Imagem referente ao ${jordan.modelo}`} />
                </div>
                <div className="JordanListaItem">
                    <div className='JordanListaItem__modelo'>{jordan.modelo}</div>
                    <div className='JordanListaItem__descricao'>{jordan.descricao}</div>
                    <div className='JordanListaItem__preco'>R$ {jordan.preco.toFixed(2)}</div>
                    <div className='JordanListaItem__acoes Acoes '>
                        <button className={`Acoes__adicionar ${!jordanSelecionado && 'Acoes__adicionar--preencher'}`} onClick={() => onAdd(index)}>Adicionar ao Carrinho</button>
                        {removeButton(jordanSelecionado , index)}
                    </div>
                </div>
        </div>
    )
}

export default JordanItem