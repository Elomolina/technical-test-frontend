import { NextApiRequest, NextApiResponse } from "next";
import { Head } from "next/document";
import { log } from "console";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      cuentaOrigen,
      cuentaDestino,
      monto,
      conceptoDebito,
      conceptoCredito,
    } = req.body;

    const data = await sentOwnAccountTransaction(
      cuentaOrigen,
      cuentaDestino,
      monto,
      conceptoCredito,
      conceptoDebito
    );
    res.status(200).json(data);
  }
}

export async function sentOwnAccountTransaction(
  cuentaOrigen: number,
  cuentaDestino: number,
  monto: string,
  conceptoDebito: string,
  conceptoCredito: string
) {
  const url = `https://api-sandbox.lafise.com/obl/v1/banks/BLNI/accounts/${cuentaOrigen}/1/transaction-request-types/FREE_FORM/transaction-requests`;
  const payload = {
    transfer_type: "OwnAccounts",
    debit_description: conceptoDebito,
    to_transfer_to_own_accounts: {
      credit_description: conceptoCredito,
      to: {
        name: "",
        bank_code: "BLNI",
        account: {
          number: cuentaDestino,
          iban: "",
        },
      },
      value: {
        currency: "NIO",
        amount: monto,
      },
    },
  };
  const data = await fetch(url, {
    method: "POST",
    headers: {
      accept: "application/json",
      "x-api-key": "G3yCDUD91N4nW6YghwTdjJoA32gauL36pq2mWZH1",
      "content-type": "application/json",
      Authorization:
        "Bearer eyJraWQiOiJSSGVcL1VWS0RSWEpleWRXZkkrZWpKY1MyVnVwWTV6MmVtWEdnRUg4dkx1RT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2dXBvZGhscG45YTQ4anVkc3JkcTExa2ZlbSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiY2F0YWxvZ3NcL2dldF9jYXRhbG9nX2RldGFpbF9ieV9jYXRhbG9nX2lkIGNhdGFsb2dzXC9nZXRfY2F0YWxvZ19ieV9jYXRhbG9nX2lkIGt5Y1wvY3VzdG9tZXJfa3ljX2NoZWNrIGNhdGFsb2dzXC9nZXRfY2F0YWxvZ3MiLCJhdXRoX3RpbWUiOjE2NzcwMjIyNTQsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0ZQb2lsRXRaSiIsImV4cCI6MTY3NzAyNTg1NCwiaWF0IjoxNjc3MDIyMjU0LCJ2ZXJzaW9uIjoyLCJqdGkiOiI4OWE2ODIwYy1iMWJhLTQ1YzUtYjA2Ny0yMGE1MmFjNWQ3MjIiLCJjbGllbnRfaWQiOiI2dXBvZGhscG45YTQ4anVkc3JkcTExa2ZlbSJ9.m1XkA7f2gvQaoCqZ-PkWrujGWIKNaqdNaEJhOvFZuzXtALwuUXChF4MjlWttn0G04OhoHZBGEWhnY2oWlw4YGAjlBTXhKvgt5lArPuJ0aLDqliBTIcQ7r7acbmyFPK_j52omkpK_smag1QlsjabKD1TsP8Jd0_Z4e56jYetS6CqYZ3L1SjxXJ7AktcErxSVFCDquL5YlstiBh72354bgWRpPSjaCPqXV_ST847JHkXonXDuhEraR1KVepdADIBHHnrsKjJqBYGBsuVJnW3h_KPR4FZHVr77JpRvIUCOCkd5fhJar-j2lg8SkLPBAcxNRvBxuq_of4kYudkCIRugpjg",
    },
    body: JSON.stringify(payload),
  });
  const response = await data.json();
  return response;
}
