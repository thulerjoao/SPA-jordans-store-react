import './AdicionaEditaJordanModal.css'
import { useState, useEffect } from "react"
import Modal from "components/Modal/Modal"
import { JordanService } from 'services/JordanService';

import { ActionMode } from 'constants/index'

function AdicionaEditaJordanModal({closeModal, onCreateJordan, mode, jordanToUpdate, onUpdateJordan}){
    const form = {
        preco: jordanToUpdate?.preco ??"",
        modelo: jordanToUpdate?.modelo ??"",
        descricao: jordanToUpdate?.descricao ??"",
        foto: jordanToUpdate?.foto ??"",
    };
    const [state, setState] = useState(form);

    const handleChange = (e, name) => {
        setState({...state, [name]: e.target.value})
    }

    const [canDisable, setCanDisable] = useState(true)

    const canDisableSendButton = () => {
        const response = !Boolean(
            state.descricao.length
            && state.foto.length
            && String(state.preco).length
            && state.modelo.length
        )
        setCanDisable(response)
    }

    useEffect(() => {
        canDisableSendButton();
    })

    const handleSend = async () => {
    const renomeiaCaminhoFoto = (fotoPath) => fotoPath.split(/\\|\//).pop();

    const { modelo, descricao, preco, foto } = state;

    const jordan = {
        ...(jordanToUpdate && { _id: jordanToUpdate?.id }),
        modelo,
        descricao,
        preco,
        foto: `assets/img/${renomeiaCaminhoFoto(foto)}`
    }

    const serviceCall = {
        [ActionMode.NORMAL]: () => JordanService.create(jordan),
        [ActionMode.ATUALIZAR]: () => JordanService.updateById(jordanToUpdate?.id, jordan),
      }
  
      const response = await serviceCall[mode]();
  
      const actionResponse = {
        [ActionMode.NORMAL]: () => onCreateJordan(response),
        [ActionMode.ATUALIZAR]: () => onUpdateJordan(response),
      }
  
      actionResponse[mode]();
  
      const reset = {
        preco: '',
        modelo: '',
        descricao: '',
        foto: '',
      }
  
      setState(reset);

    closeModal();
    }

    return(
        <Modal closeModal={closeModal}>
            <div className='AdicionaJordanModal'>
                <form autoComplete="off">
                <h2> { ActionMode.ATUALIZAR === mode ? 'Atualizar Jordan' : 'Cadastrar Jordan' }</h2>
                    <div>
                        <label className='AdicionaJordanModal__text' htmlFor="">Preço</label>
                        <input id='preco'
                        type="text"
                        placeholder='R$'
                        value={state.preco}
                        onChange={(e) => handleChange(e, "preco")}
                        required />
                    </div>
                    <div>
                    <label className="AdicionaJordanModal__text" htmlFor="sabor"> Modelo: </label>
                        <input
                            id="modelo"
                            placeholder="Air Jordan 1"
                            type="text"
                            value={state.modelo}
                            onChange={(e) => handleChange(e, "modelo")}
                            required />
                    </div>
                    <div>
                    <label className="AdicionaJordanModal__text" htmlFor="descricao"> Descrição: </label>
                        <input
                            id="descricao"
                            placeholder="Descrição do Jordan"
                            type="text"
                            value={state.descricao}
                            onChange={(e) => handleChange(e, "descricao")}
                            required />
                    </div>
                    <div>
                        <label className="AdicionaJordanModal__text  AdicionaJordanModal__foto-label" htmlFor="foto" >
                            {!state.foto.length ? "Selecionar Imagem" : state.foto}
                        </label>
                        <input
                            className=" AdicionaJordanModal__foto"
                            id="foto"
                            type="file"
                            accept="image/png, image/gif, image/jpeg"
                            onChange={(e) => handleChange(e, "foto")}
                            required />
                    </div>
                    <button
                        className="AdicionaJordanModal__enviar"
                        type="button"
                        disabled={canDisable}
                        onClick={handleSend} >
                        {ActionMode.NORMAL === mode? 'Enviar': 'Atualizar'}
                    </button>
                </form>
            </div>
        </Modal>
    );
}

export default AdicionaEditaJordanModal