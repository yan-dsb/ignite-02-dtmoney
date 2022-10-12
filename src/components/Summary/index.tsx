import React, { useCallback, useMemo } from 'react';
import { Container, Card, CardBody, CardHeader } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/transactions';

export function Summary(): JSX.Element {
  const { transactions } = useTransactions();

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'deposit') {
          acc.deposits += transaction.amount;
          acc.total += transaction.amount;
        } else {
          acc.withdraws += transaction.amount;
          acc.total -= transaction.amount;
        }
        return acc;
      },
      {
        deposits: 0,
        withdraws: 0,
        total: 0
      }
    );
  }, [transactions]);

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
          <strong>{getNumberFormatted(summary.deposits)}</strong>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardHeader>
            <p>Saídas</p>
            <img src={outcomeImg} alt="saídas" />
          </CardHeader>
          <strong>- {getNumberFormatted(summary.withdraws)}</strong>
        </CardBody>
      </Card>
      <Card className="background">
        <CardBody>
          <CardHeader>
            <p>Total</p>
            <img src={totalImg} alt="total" />
          </CardHeader>
          <strong>{getNumberFormatted(summary.total)}</strong>
        </CardBody>
      </Card>
    </Container>
  );
}
