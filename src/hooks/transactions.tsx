import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import { api } from '../services/api';

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

interface TransactionsContextData {
  transactions: Transaction[];
}

export const TransactionsContext =
  createContext<TransactionsContextData | null>(null);

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsProvider: React.FC<TransactionsProviderProps> = ({
  children
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get('/transactions')
      .then(response => {
        setTransactions(response.data.transactions);
      })
      .catch(err => console.log(err));
  }, []);

  const provider = useMemo(() => {
    return { transactions };
  }, [transactions]);

  return (
    <TransactionsContext.Provider value={provider}>
      {children}
    </TransactionsContext.Provider>
  );
};

export function useTransactions(): TransactionsContextData {
  const context = useContext(TransactionsContext);

  if (context === null) {
    throw new Error('useTransactions must be whithin a TransactionsContext');
  }

  return context;
}
