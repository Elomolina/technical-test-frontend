import React, { ChangeEvent } from "react";
import clientNumber from "@/context/clientNumber";

interface InputProps {
  label: string;
  onChange: (event: React.ChangeEvent) => void;
  clientNumber: string;
}

const Input = ({ label, onChange, clientNumber }: InputProps) => {
  return (
    <>
      <section>
        <label
          htmlFor="customerID"
          className="label block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
        <input
          value={clientNumber}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="text"
          id="customerID"
          placeholder={label}
          onChange={onChange}
        />
      </section>
    </>
  );
};

export default Input;
