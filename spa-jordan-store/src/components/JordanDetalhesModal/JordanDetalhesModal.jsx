import './JordanDetalhesModal.css'
import Modal from 'components/Modal/Modal';

function JordanDetalhesModal({ jordan, closeModal }){
    
    return(
        <Modal closeModal={closeModal}>
            <div className='JordanDetalhesModal'>
                <div>
                    <div className="image">
                        <img src={jordan.foto} alt={`Foto de ${jordan.modelo}`} className='JordanDetalhesModal__foto'/>
                    </div>
                    <div className='JordanDetalhesModal__modelo'>{jordan.modelo}</div>
                <div className='JordanDetalhesModal__descricao'>{`${jordan.descricao}`}</div>
                    <div className='JordanDetalhesModal__preco'>{`R$ ${Number(jordan.preco).toFixed(2)}`}</div>
                    {(jordan.preco>=1990) && <div className='JordanDetalhesModal__freteGratis'>Frete Grátis</div>}
                </div>
            </div>
        </Modal>
    );
}

export default JordanDetalhesModal;