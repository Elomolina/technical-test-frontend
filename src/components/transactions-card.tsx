import React from "react";

interface transactionsProps {
  account_number: number;
  transaction_amount: number;
  transaction_date: string;
  transaction_description: string;
  transaction_type: string;
}
const TransactionsCard = (props: transactionsProps) => {
  return (
    <div className="card max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl text-gray-800">
          Número de cuenta: {props.account_number}
        </h2>
        <p className="text-gray-600 text-base mt-2">
          Cantidad transferida: {props.transaction_amount}
        </p>
        <p className="text-gray-600 text-base mt-2">
          Fecha de la transferencia: {props.transaction_date}
        </p>
        <p className="text-gray-600 text-base mt-2">
          Descripción de la transferencia: {props.transaction_description}
        </p>
        <p className="text-gray-600 text-base mt-2">
          Tipo de transacción: {props.transaction_type}
        </p>
      </div>
    </div>
  );
};
export default TransactionsCard;
