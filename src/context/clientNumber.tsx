import React, { createContext, useState } from "react";

// Definir el tipo del contexto
interface ClientContextType {
  client: string;
  setClient: React.Dispatch<React.SetStateAction<string>>;
}

// Crear el contexto con un tipo definido
const ClientNumber = createContext<ClientContextType | undefined>(undefined);

const ClientProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [client, setClient] = useState("1");

  return (
    <ClientNumber.Provider value={{ client, setClient }}>
      {children}
    </ClientNumber.Provider>
  );
};

export { ClientProvider };

export default ClientNumber;
