import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import Navbar from "@/components/navbar";
import Input from "@/components/input";
import ClientNumber from "@/context/clientNumber";
//cuenta origen, cuenta destino, monto, concepto de debito, concepto de credito
const ownAccounts = () => {
  const context = useContext(ClientNumber);
  const [disabled, setDisabled] = useState(true);
  const [formValues, setFormValues] = useState({
    cuentaOrigen: "",
    cuentaDestino: "",
    monto: "",
    conceptoDebito: "",
    conceptoCredito: "",
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const a = async () => {
      const data = await fetch("/api/services/sentOwnAccountTransaction", {
        method: "POST",
        body: JSON.stringify(formValues),
      });
      const response = await data.json();
      console.log(response);
    };
    a();
  };
  const onChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    setFormValues((previousInputs) => ({
      ...previousInputs,
      [name]: value,
    }));
    const isValid = Object.values(formValues).every(
      (value) => value.trim() !== ""
    );
    if (isValid) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  if (!context) {
    throw new Error("");
  }

  const { client, setClient } = context;
  return (
    <>
      <Navbar />
      <section>
        <h1>Entre cuentas propias</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="cuentaOrigen"
            label="Cuenta origen"
            onChange={onChange}
            clientNumber={formValues.cuentaOrigen}
          />
          <Input
            type="text"
            name="cuentaDestino"
            label="Cuenta destino"
            onChange={onChange}
            clientNumber={formValues.cuentaDestino}
          />
          <Input
            type="number"
            name="monto"
            label="Monto"
            onChange={onChange}
            clientNumber={formValues.monto}
          />
          <Input
            type="text"
            name="conceptoDebito"
            label="Concepto de debito"
            onChange={onChange}
            clientNumber={formValues.conceptoDebito}
          />
          <Input
            type="text"
            name="conceptoCredito"
            label="Concepto de credito"
            onChange={onChange}
            clientNumber={formValues.conceptoCredito}
          />
          <input className="sendButton" type="submit" value="Enviar" />
        </form>
      </section>
    </>
  );
};

export default ownAccounts;
