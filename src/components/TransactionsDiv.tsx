import React from "react";
import Image from "next/image";
interface TransactionsDivProps {
  source: string;
  text: string;
}
const TransactionsDiv = (props: TransactionsDivProps) => {
  return (
    <div className="transference-type">
      <Image width={20} height={20} alt="reverses" src={props.source}></Image>
      <h3>{props.text}</h3>
    </div>
  );
};

export default TransactionsDiv;
