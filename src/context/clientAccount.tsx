import React, { createContext, useState } from "react";

// Definir el tipo del contexto
interface ClientContextType {
  accountsNumber: number[];
  setAccountsNumber: React.Dispatch<React.SetStateAction<number[]>>;
}

// Crear el contexto con un tipo definido
const clientAccounts = createContext<ClientContextType | undefined>(undefined);

const AccountsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [accountsNumber, setAccountsNumber] = useState<number[]>([]);

  return (
    <clientAccounts.Provider value={{ accountsNumber, setAccountsNumber }}>
      {children}
    </clientAccounts.Provider>
  );
};

export { AccountsProvider };

export default clientAccounts;
