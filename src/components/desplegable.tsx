import React, { MouseEventHandler } from "react";
import { useState } from "react";
import clientAccounts from "@/context/clientAccount";
import { useContext } from "react";
interface desplegableProps {
  text: string;
  onChange: (account: number, text: string) => void;
}
const Desplegable = (props: desplegableProps) => {
  const accountsContext = useContext(clientAccounts);
  if (!accountsContext) {
    throw new Error("El contexto ClientNumber no está disponible.");
  }
  const { accountsNumber, setAccountsNumber } = accountsContext;
  const [isOpen, setIsOpen] = useState(false);
  const [chosenAccount, setChosenAccount] = useState(accountsNumber[0]);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (account: number) => {
    props.onChange(account, props.text);
    setChosenAccount(account);
  };
  return (
    <div className="dropdown relative inline-block text-left">
      <h2 className="text">{props.text}</h2>
      <button
        onClick={toggleDropdown}
        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {chosenAccount}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="dropdown right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1"></div>
          {accountsNumber.map((account, index) => (
            <a
              key={index}
              onClick={() => {
                handleClick(account);
              }}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {account}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Desplegable;
