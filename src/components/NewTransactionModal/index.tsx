import React from 'react';
import Modal from 'react-modal';
import { Container } from './styles';
import closeImg from '../../assets/close.svg';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps): JSX.Element {
  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={() => console.log('here')}>
        <h2>Cadastrar transação</h2>
        <input name="title" type="text" placeholder="Título" />
        <input name="amount" type="number" placeholder="Valor" />
        <input name="category" type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
