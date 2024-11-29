import React from "react";

interface AccountTypeProps {
  customer_number: number;
  account_number: number;
  account_type: string;
  currency: string;
}

const Card = (props: AccountTypeProps) => {
  return (
    <div className="card max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl text-gray-800">
          Número del cliente: <b>{props.customer_number}</b>
        </h2>
        <p className="text-gray-600 text-base mt-2">
          Número de cuenta: <b>{props.account_number}</b>
        </p>
        <p className="text-gray-600 text-base mt-2">
          Tipo de cuenta: <b>{props.account_type}</b>
        </p>
        <p className="text-gray-600 text-base mt-2">
          Moneda: <b>{props.currency}</b>
        </p>
      </div>
    </div>
  );
};

export default Card;
