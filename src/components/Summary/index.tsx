import React from 'react';
import { Container, Card, CardBody, CardHeader } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary(): JSX.Element {
  return (
    <Container>
      <Card>
        <CardBody>
          <CardHeader>
            <p>Entradas</p>
            <img src={incomeImg} alt="entradas" />
          </CardHeader>
          <strong>R$ 1k</strong>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardHeader>
            <p>Saídas</p>
            <img src={outcomeImg} alt="saídas" />
          </CardHeader>
          <strong>R$ 1k</strong>
        </CardBody>
      </Card>
      <Card className="background">
        <CardBody>
          <CardHeader>
            <p>Total</p>
            <img src={totalImg} alt="total" />
          </CardHeader>
          <strong>R$ 1k</strong>
        </CardBody>
      </Card>
    </Container>
  );
}
