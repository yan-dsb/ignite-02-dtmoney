import React from 'react';
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

Modal.setAppElement('#root');

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({
  onOpenNewTransactionModal
}: HeaderProps): JSX.Element {
  return (
    <Container>
      <Content className="container">
        <img src={logoImg} alt="dt money logo" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
