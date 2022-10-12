import React, {
  createContext,
  ReactNode,
  useCallback,
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

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (data: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as any
);

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

  const createTransaction = useCallback(async (data: TransactionInput) => {
    const response = await api.post('/transactions', {
      ...data,
      createdAt: new Date()
    });
    setTransactions(prevSate => [...prevSate, response.data.transaction]);
  }, []);

  const provider = useMemo(() => {
    return { transactions, createTransaction };
  }, [transactions, createTransaction]);

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
