import React from "react";

interface AccountTypeProps {
  customer_number: number;
  account_number: number;
  account_type: string;
  currency: string;
  balance: number;
  debit: number;
  product_code: string;
}

const Card = (props: AccountTypeProps) => {
  return (
    <div className="card max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl text-gray-800">
          Número del cliente: {props.customer_number}
        </h2>
        <p className="text-gray-600 text-base mt-2">
          Número de cuenta: {props.account_number}
        </p>
        <p className="text-gray-600 text-base mt-2">
          Tipo de cuenta: {props.account_type}
        </p>
        <p className="text-gray-600 text-base mt-2">Moneda: {props.currency}</p>
        <hr />
        <h5 className="h5 font-bold text-xl text-gray-800">
          Información de la cuenta:
        </h5>
        <p className="text-gray-600 text-base mt-2">
          Código del producto: {props.product_code}
        </p>
        <p className="text-gray-600 text-base mt-2">
          Balance: ${props.balance}
        </p>
        <p className="text-gray-600 text-base mt-2">
          Cantidad de tarjetas de débito: {props.debit}
        </p>
      </div>
    </div>
  );
};

export default Card;
