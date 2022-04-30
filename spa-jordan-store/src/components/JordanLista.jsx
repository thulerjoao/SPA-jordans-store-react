import './JordanLista.css';
import {jordan} from '../mocks/jordan'
import React, {useState} from 'react';

function JordanLista() {

    const [jordanSelecionado, setJordanSelecionado] = useState({});
    const adicionarItem = (jordanIndex) => {
      const jordan = {[jordanIndex]:Number(jordanSelecionado[jordanIndex] || 0) + 1}
      setJordanSelecionado({...jordanSelecionado, ...jordan})
    }
    
    return <div className="JordanLista">
        {jordan.map((jordan, index)=>      
                <div className='cards' key={index}>
                    <span className='JordanListaItem__badge'>{jordanSelecionado[index] || "-"}</span>
                <div className='JordanListaItem__foto'>
                    <img className='JordanListaItem__foto--img' src={jordan.foto} alt={`Imagem referente ao ${jordan.modelo}`} />
                </div>
                <div className="JordanListaItem">
                    <div className='JordanListaItem__modelo'>{jordan.modelo}</div>
                    <div className='JordanListaItem__descricao'>{jordan.descricao}</div>
                    <div className='JordanListaItem__preco'>R$ {jordan.preco.toFixed(2)}</div>
                    <div className='JordanListaItem__acoes Acoes '>
                        <button className='Acoes__adicionar Acoes__adicionar--preencher' onClick={() => adicionarItem(index)}>Adicionar ao Carrinho</button>
                    </div>
                </div>
                </div>
                )} 
            </div>;
}
  
  export default JordanLista;
 
 