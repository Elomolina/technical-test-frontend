import React from "react";

interface InputProps {
  label: string;
}

const Input = ({ label }: InputProps) => {
  return (
    <>
      <section>
        <label htmlFor="customerID">{label}</label>
        <input
          className="input-customerID"
          type="text"
          id="customerID"
          placeholder="aaa"
        />
      </section>
    </>
  );
};

export default Input;
