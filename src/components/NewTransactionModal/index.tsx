import React, { useCallback, useState } from 'react';
import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps): JSX.Element {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  const handleCreateNewTransaction = useCallback(
    async (event: React.FormEvent) => {
      const data = {
        title,
        value,
        category,
        type
      };
      const response = await api.post('/transactions', data);
      console.log(response.data);
    },
    [title, value, category, type]
  );

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
      <Container
        method="POST"
        onSubmit={event => {
          event.preventDefault();
          void (async () => {
            await handleCreateNewTransaction(event);
          })();
        }}
      >
        <h2>Cadastrar transação</h2>
        <input
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Título"
        />
        <input
          name="value"
          value={value}
          onChange={e => setValue(Number(e.target.value))}
          type="number"
          placeholder="Valor"
        />
        <TransactionTypeContainer>
          <RadioBox
            isActive={type === 'deposit'}
            activeColor="green"
            type="button"
            onClick={() => setType('deposit')}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            isActive={type === 'withdraw'}
            activeColor="red"
            type="button"
            onClick={() => setType('withdraw')}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          name="category"
          value={category}
          onChange={e => setCategory(e.target.value)}
          type="text"
          placeholder="Categoria"
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
