import React from "react";
import Navbar from "@/components/Navbar";
import TransactionsDiv from "@/components/TransactionsDiv";

const transactionsTypes = [
  {
    text: "Entre cuentas propias",
    img: "/reverse.png",
  },
  {
    text: "Banco Local",
    img: "/bank.png",
  },
  {
    text: "Teceros LAFISE mismo pais",
    img: "/arrows.png",
  },
  {
    text: "Pagos de servicio",
    img: "/client.png",
  },
  {
    text: "Terceros LAFISE regional",
    img: "/world.png",
  },
];
const transactions = () => {
  return (
    <>
      <Navbar></Navbar>
      <section>
        <h1>Transferencia entre cuentas</h1>
        {transactionsTypes.map((transaction) => (
          <TransactionsDiv
            text={transaction.text}
            source={transaction.img}
          ></TransactionsDiv>
        ))}
      </section>
    </>
  );
};

export default transactions;
