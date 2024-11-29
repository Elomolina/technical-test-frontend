import React from "react";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import { useState, useEffect, useContext } from "react";
import Input from "@/components/Input";
import ClientNumber from "@/context/clientNumber";
type AccountType = {
  customer_number: number;
  account_number: number;
  account_type: string;
  currency: string;
  balance: any;
  debit_card: [];
  product_code: string;
};

const getAccount = () => {
  const context = useContext(ClientNumber);
  if (!context) {
    throw new Error("");
  }

  const { client, setClient } = context;
  const [accounts, setAccounts] = useState<AccountType[]>([]);
  const [error, setError] = useState("");
  const handleInputChange = (event: React.ChangeEvent) => {
    setClient(event.target.value);
  };

  useEffect(() => {
    const loadAccounts = async () => {
      try {
        const response = await fetch(
          `/api/services/getAccounts?customerID=${client}`
        );
        if (response.ok) {
          const data = await response.json();
          const accountInformation = data.map(async (account: any) => {
            const accountInfoResponse = await fetch(
              `/api/services/getAccountByID?accountNumber=${account.account_number}`
            );
            if (accountInfoResponse.ok) {
              const { balance, debit_card, product_code } =
                await accountInfoResponse.json();
              return {
                ...account,
                balance,
                debit_card,
                product_code,
              };
            }
          });
          const promesas = await Promise.all(accountInformation);
          setAccounts(promesas);
          setError("");
        } else {
          setError("El número de cliente es inválido");
        }
      } catch (error: any) {
        setError(error.message);
      }
    };
    loadAccounts();
  }, [client]);
  console.log(accounts);

  if (error === "El número de cliente es inválido") {
    return (
      <>
        <Navbar></Navbar>
        <section>
          <h1>Obtener cuentas</h1>
          <Input
            clientNumber={client}
            label="Ingrese número de cliente:"
            onChange={handleInputChange}
          ></Input>
          {error === "El número de cliente es inválido" && (
            <h3 className="error">{error}</h3>
          )}
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
          clientNumber={client}
          label="Ingrese número de cliente:"
          onChange={handleInputChange}
        />
        {error === "El número de cliente es inválido" ? (
          <h3 className="error">{error}</h3>
        ) : (
          ""
        )}
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
};

export default getAccount;
