import React from "react";
import Navbar from "@/components/navbar";
import Card from "@/components/card";
import { useState, useEffect, useContext, useRef } from "react";
import Input from "@/components/input";
import ClientNumber from "@/context/clientNumber";
import clientAccounts from "@/context/clientAccount";
import { AccountType, ErrorState } from "@/types";
import {
  fetchAccountDetailsByID,
  fetchAccountsByCustomerID,
} from "@/services/account.service";

const GetAccount = () => {
  const context = useContext(ClientNumber);
  const accountsContext = useContext(clientAccounts);
  if (!context) {
    throw new Error("El contexto ClientNumber no está disponible.");
  }
  if (!accountsContext) {
    throw new Error("El context clientAccounts no está disponible.");
  }
  const { client, setClient } = context;
  const { accountsNumber, setAccountsNumber } = accountsContext;
  const [accounts, setAccounts] = useState<AccountType[]>([]);
  const [error, setError] = useState<ErrorState | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClient(event.target.value);
  };

  useEffect(() => {
    const loadAccounts = async () => {
      try {
        const accounts = await fetchAccountsByCustomerID(client);
        const detailedAccounts = await Promise.all(
          accounts.map(async (account: AccountType) => {
            const details = await fetchAccountDetailsByID(
              account.account_number
            );
            return { ...account, ...details };
          })
        );
        setAccounts(detailedAccounts);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          setError({ message: err.message });
        } else {
          setError({ message: "Ha ocurrido un error desconocido." });
        }
      }
    };

    if (client) {
      loadAccounts();
    }
  }, [client]);
  useEffect(() => {
    const accountsNumber = accounts.map((account) => account.account_number);
    setAccountsNumber(accountsNumber);
  }, [accounts]);
  if (error == null) {
    return (
      <>
        <Navbar />
        <section>
          <h1>Obtener cuentas</h1>
          <Input
            name=""
            type=""
            clientNumber={client}
            label="Ingrese número de cliente:"
            onChange={handleInputChange}
          />
          <div className="cards">
            {accounts.map((account, index) => (
              <Card
                key={index}
                customer_number={account.customer_number}
                account_number={account.account_number}
                account_type={account.account_type}
                currency={account.currency}
                balance={account.balance.amount}
                debit={account.debit_card.length}
                product_code={account.product_code}
              />
            ))}
          </div>
        </section>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <section>
        <h1>Obtener cuentas</h1>
        <Input
          name=""
          type=""
          clientNumber={client}
          label="Ingrese número de cliente:"
          onChange={handleInputChange}
        />
        {error && <h3 className="error">{error.message}</h3>}
      </section>
    </>
  );
};

export default GetAccount;
