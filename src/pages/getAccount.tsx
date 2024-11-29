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
      const response = await fetch(
        `/api/services/getAccounts?customerID=${clientNumber}`
      );
      if (response.ok) {
        const data = await response.json();
        setAccounts(data);
        setError("");
      } else {
        setError("El número de cliente es inválido");
      }
    };
    loadAccounts();
  }, [clientNumber]);
  useEffect(() => {
    const loadAccounts = async () => {
      try {
        const response = await fetch(
          `/api/services/getAccounts?customerID=${1}`
        );
        if (response.ok) {
          const data = await response.json();
          setAccounts(data);
          setError("");
        }
      } catch (error: any) {
        setError(error.message);
      }
    };
    loadAccounts();
  }, []);
if(error === 'El número de cliente es inválido')
{
  return (
    <>
      <Navbar></Navbar>
      <section>
        <h1>Obtener cuentas</h1>
        <Input
          label="Ingrese número de cliente:"
          onChange={handleInputChange}
        ></Input>
        {error === "El número de cliente es inválido" ? <h3>{error}</h3> : ""}
      </section>
    </>
  );
}
return (
  <>
    <Navbar></Navbar>
    <section>
      <h1>Obtener cuentas</h1>
      <Input
        label="Ingrese número de cliente:"
        onChange={handleInputChange}
      ></Input>
      {error === "El número de cliente es inválido" ? <h3>{error}</h3> : ""}
      <div className="cards">
        {accounts.map((account, index) => {
          return (
            <Card
              key={index}
              customer_number={account.customer_number}
              account_number={account.account_number}
              account_type={account.account_type}
              currency={account.currency}
            ></Card>
          );
        })}
      </div>
    </section>
  </>
);
};

export default getAccount;
