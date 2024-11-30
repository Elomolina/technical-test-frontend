import React, { useContext, useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Desplegable from "@/components/desplegable";
import clientAccounts from "@/context/clientAccount";
import { error, log } from "console";
import { fetchAccountTransactions } from "@/services/account.service";
import { TransactionsType } from "@/types/transaction-type";
import TransactionsCard from "@/components/transactions-card";
const movements = () => {
  const accountsContext = useContext(clientAccounts);
  if (!accountsContext) {
    throw new Error("Cuentas no encontradas");
  }
  const { accountsNumber, setAccountsNumber } = accountsContext;
  const [chosenAccount, setChosenAccount] = useState(accountsNumber[0]);
  const [transaction, setTransaction] = useState<TransactionsType[]>([]);
  const onChangeDesplegable = (account: number, text: string) => {
    setChosenAccount(account);
  };
  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await fetchAccountTransactions(chosenAccount);
      const content = response.content;
      const detailedAccounts = await Promise.all(
        content.map(async (account: any) => {
          return { ...account };
        })
      );

      setTransaction(detailedAccounts);
    };
    fetchTransactions();
  }, [chosenAccount]);

  return (
    <>
      <Navbar></Navbar>
      <section>
        <h1>Historial de transacciones</h1>
        <Desplegable
          text="Escoge la cuenta que deseas ver sus transacciones"
          onChange={onChangeDesplegable}
        ></Desplegable>
        <section className="transactionsCard">
          {transaction.map(
            (transcationDetail: TransactionsType, index: number) => (
              <TransactionsCard
                key={index}
                account_number={transcationDetail.account_number}
                transaction_amount={transcationDetail.transaction_amount}
                transaction_date={transcationDetail.transaction_date}
                transaction_description={
                  transcationDetail.transaction_description
                }
                transaction_type={transcationDetail.transaction_type}
              />
            )
          )}
        </section>
      </section>
    </>
  );
};

export default movements;
