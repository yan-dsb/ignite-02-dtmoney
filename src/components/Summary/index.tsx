import React, { useCallback, useMemo } from 'react';
import { Container, Card, CardBody, CardHeader } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/transactions';

export function Summary(): JSX.Element {
  const { transactions } = useTransactions();

  const totalIncome = useMemo(() => {
    return transactions.reduce((acc, current) => {
      if (current.type === 'deposit') {
        return acc + current.amount;
      }
      return acc + 0;
    }, 0);
  }, [transactions]);

  const totalOutCome = useMemo(() => {
    return transactions.reduce((acc, current) => {
      if (current.type === 'withdraw') {
        return acc + current.amount;
      }
      return acc + 0;
    }, 0);
  }, [transactions]);

  const total = useMemo(() => {
    return totalIncome - totalOutCome;
  }, [totalIncome, totalOutCome]);

  const getNumberFormatted = useCallback((amount: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    }).format(amount);
  }, []);

  return (
    <Container>
      <Card>
        <CardBody>
          <CardHeader>
            <p>Entradas</p>
            <img src={incomeImg} alt="entradas" />
          </CardHeader>
          <strong>{getNumberFormatted(totalIncome)}</strong>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardHeader>
            <p>Saídas</p>
            <img src={outcomeImg} alt="saídas" />
          </CardHeader>
          <strong>- {getNumberFormatted(totalOutCome)}</strong>
        </CardBody>
      </Card>
      <Card className="background">
        <CardBody>
          <CardHeader>
            <p>Total</p>
            <img src={totalImg} alt="total" />
          </CardHeader>
          <strong>{getNumberFormatted(total)}</strong>
        </CardBody>
      </Card>
    </Container>
  );
}
