import React from 'react';
import { TransactionList } from '../TransactionList';
import { Card, CardBody, CardsContainer, Container } from './styles';

export function Content(): JSX.Element{
  return (
    <Container>
      <CardsContainer>
        <Card>
          <CardBody>
            <div>Entradas</div>
            <span>R$ 17.400,00</span>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div>Entradas</div>
            <span>R$ 17.400,00</span>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div>Entradas</div>
            <span>R$ 17.400,00</span>
          </CardBody>
        </Card>
      </CardsContainer>
      <div className="transactions-container">
        <TransactionList />
      </div>
    </Container>
  );
}
