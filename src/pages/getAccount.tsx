import React from "react";
import Navbar from "@/components/Navbar";
import Input from "@/components/Input";
import { getAccounts } from "./api/services/getAccounts";
import { useState, useEffect } from "react";
import { get } from "http";
import { log } from "console";

const getAccount = () => {
  const [accounts, setAccounts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAccounts = async () => {
      try {
        const response = await fetch("/api/getAccounts");
        if (response.ok) {
          const r = response.json();
          console.log(r);
        }
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
