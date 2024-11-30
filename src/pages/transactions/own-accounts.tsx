import React, {
  ChangeEvent,
  FormEvent,
  ReactHTMLElement,
  useEffect,
  useContext,
  useState,
  useRef,
} from "react";
import Navbar from "@/components/navbar";
import Input from "@/components/input";
import ClientNumber from "@/context/clientNumber";
import clientAccounts from "@/context/clientAccount";
import Desplegable from "@/components/desplegable";
import Alert from "@/components/alert";
import { fetchOwnAccountsTransaction } from "@/services/account.service";
import { log } from "console";
//cuenta origen, cuenta destino, monto, concepto de debito, concepto de credito
const ownAccounts = () => {
  const clientContext = useContext(ClientNumber);
  const accountsContext = useContext(clientAccounts);
  if (!clientContext || !accountsContext) {
    throw new Error("El contexto ClientNumber no está disponible.");
  }
  const { client, setClient } = clientContext;
  const { accountsNumber, setAccountsNumber } = accountsContext;
  const [isValid, setIsValid] = useState(false);
  const [IsDataSent, setDataSent] = useState("");
  const [formValues, setFormValues] = useState({
    cuentaOrigen: accountsNumber[0],
    cuentaDestino: accountsNumber[0],
    monto: "",
    conceptoDebito: "",
    conceptoCredito: "",
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formValid = Object.values(formValues).every((value) =>
      typeof value === "string" ? value.trim() !== "" : true
    );
    setIsValid(formValid);
    const fetchTransaction = async () => {
      const data = await fetchOwnAccountsTransaction(formValues);
      console.log(data);
      if (data.status === "Success") {
        setDataSent("success");
      } else {
        setDataSent("initialized");
      }
    };
    fetchTransaction();
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues((previousInputs) => ({
      ...previousInputs,
      [name]: value,
    }));
  };
  const onChangeDesplegable = (account: number, text: string) => {
    let name = "";
    if (text == "Cuenta origen") {
      name = "cuentaOrigen";
    } else {
      name = "cuentaDestino";
    }
    setFormValues((previousInputs) => ({
      ...previousInputs,
      [name]: account,
    }));
  };
  useEffect(() => {
    if (isValid) {
      const fetchTransaction = async () => {
        const data = await fetchOwnAccountsTransaction(formValues);
        console.log(data);
        if (data.status === "Success") {
          setDataSent("success");
        } else {
          setDataSent("initialized");
        }
      };
      fetchTransaction();
    }
  }, [isValid]);
  return (
    <>
      <Navbar />
      <section>
        <h1>Transferencia entre cuentas propias</h1>
        <form onSubmit={handleSubmit}>
          <Desplegable
            onChange={onChangeDesplegable}
            text="Cuenta origen"
          ></Desplegable>
          <Desplegable
            onChange={onChangeDesplegable}
            text="Cuenta Destino"
          ></Desplegable>
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
      {!isValid ? (
        <Alert message="Completa los campos para continuar" type="error" />
      ) : (
        <Alert message="Datos completados" type="success" />
      )}
      {IsDataSent === "success" && (
        <Alert
          message="La transaccion fue completada exitosamente"
          type="success"
        />
      )}
      {IsDataSent === "initialized" && (
        <Alert
          message="La transaccion fue inicializada pero no completada exitosamente"
          type="warning"
        />
      )}
    </>
  );
};

export default ownAccounts;
