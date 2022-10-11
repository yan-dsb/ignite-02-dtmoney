import React from 'react';
import { Summary } from '../Summary';
import { Container } from './styles';

export function Dashboard(): JSX.Element {
  return (
    <Container>
      <Summary />
    </Container>
  );
}
