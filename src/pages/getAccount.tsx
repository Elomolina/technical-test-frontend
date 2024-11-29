import React from "react";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import { useState, useEffect } from "react";
import Input from "@/components/Input";
import { log } from "console";
type AccountType = {
  customer_number: number;
  account_number: number;
  account_type: string;
  currency: string;
  balance: any;
  debit_card: [];
  net_balance: any;
  product_code: string;
};

const getAccount = () => {
  const [clientNumber, setClientNumber] = useState("");
  const [accounts, setAccounts] = useState<AccountType[]>([]);
  const [error, setError] = useState("");
  const handleInputChange = (event: React.ChangeEvent) => {
    setClientNumber(event.target.value);
  };

  useEffect(() => {
    if (clientNumber.length === 0) {
      setClientNumber("1");
    }
    const loadAccounts = async () => {
      try {
        const response = await fetch(
          `/api/services/getAccounts?customerID=${clientNumber}`
        );
        if (response.ok) {
          const data = await response.json();
          data.map((account: any) => {
            const accountInfo = async () => {
              const accountInfoResponse = await fetch(
                `/api/services/getAccountByID?accountNumber=${account.account_number}`
              );
              if (accountInfoResponse.ok) {
                const { balance, debit_card, net_balance, product_code } =
                  await accountInfoResponse.json();
                (account["balance"] = balance),
                  (account["debit_card"] = debit_card),
                  (account["net_balance"] = net_balance),
                  (account["product_code"] = product_code);

                setAccounts((a) => [...a, account]);
              }
            };
            accountInfo();
          });
          setError("");
        } else {
          setError("El número de cliente es inválido");
        }
      } catch (error: any) {
        setError(error.message);
      }
    };
    loadAccounts();
  }, [clientNumber]);
  console.log(accounts);

  if (error === "El número de cliente es inválido") {
    return (
      <>
        <Navbar></Navbar>
        <section>
          <h1>Obtener cuentas</h1>
          <Input
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
              account_type={account.product_code}
              currency={account.currency}
            ></Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default getAccount;
