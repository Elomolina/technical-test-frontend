import React from "react";
import Navbar from "@/components/navbar";
import TransactionsDiv from "@/components/transactions-div";
import Link from "next/link";
const transactionsTypes = [
  {
    text: "Entre cuentas propias",
    img: "/reverse.png",
    src: "own-accounts",
  },
  {
    text: "Banco Local",
    img: "/bank.png",
    src: "local-bank",
  },
  {
    text: "Teceros LAFISE mismo pais",
    img: "/arrows.png",
    src: "regional",
  },
  {
    text: "Pagos de servicio",
    img: "/client.png",
    src: "services",
  },
  {
    text: "Terceros LAFISE regional",
    img: "/world.png",
    src: "third-party-accounts",
  },
];
const transactions = () => {
  return (
    <>
      <Navbar></Navbar>
      <section>
        <h1>Transferencia entre cuentas</h1>
        {transactionsTypes.map((transaction) => (
          <Link href={`transactions/${transaction.src}`}>
            <TransactionsDiv
              text={transaction.text}
              source={transaction.img}
            ></TransactionsDiv>
          </Link>
        ))}
      </section>
    </>
  );
};

export default transactions;
