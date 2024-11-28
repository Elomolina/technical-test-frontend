import React from "react";
import Navbar from "@/components/Navbar";
import Input from "@/components/Input";
import { getAccounts } from "../services/getAccounts";
import { useState, useEffect } from "react";
import { get } from "http";
import { log } from "console";
const getAccount = () => {
  const [accounts, setAccounts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAccounts = async () => {
      try {
        const data = await getAccounts();
        setAccounts(data);
      } catch (error: any) {
        setError(error.message);
      }
    };

    loadAccounts();
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <section>
        <h1>Obtener cuentas</h1>
        {accounts}
      </section>
    </>
  );
};

export default getAccount;
