import React from 'react';
import { Summary } from '../Summary';
import { TransactionTable } from '../TransactionTable';
import { Container } from './styles';

export function Dashboard(): JSX.Element {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
}
