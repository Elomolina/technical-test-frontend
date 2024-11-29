import React, { ChangeEvent, FormEvent, useContext } from "react";
import Navbar from "@/components/Navbar";
import Input from "@/components/Input";
import ClientNumber from "@/context/clientNumber";
const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
};
const onChange = (e: ChangeEvent) => {
  console.log(e.target.value);
};
//cuenta origen, cuenta destino, monto, concepto de debito, concepto de credito
const ownAccounts = () => {
  const context = useContext(ClientNumber);

  if (!context) {
    throw new Error("");
  }

  const { client, setClient } = context;
  console.log(client);
  return (
    <>
      <Navbar />
      <section>
        <h1>Entre cuentas propias</h1>
        <form onSubmit={handleSubmit}>
          <Input label="Cuenta origen" onChange={onChange} clientNumber="" />
          <Input label="Cuenta destino" onChange={onChange} clientNumber="" />
          <Input label="Monto" onChange={onChange} clientNumber="" />
          <Input
            label="Concepto de debito"
            onChange={onChange}
            clientNumber=""
          />
          <Input
            label="Concepto de credito"
            onChange={onChange}
            clientNumber=""
          />
          <input type="submit" value="Enviar" />
        </form>
      </section>
    </>
  );
};

export default ownAccounts;
