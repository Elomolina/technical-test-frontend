import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { accountNumber } = req.query;

    const data = await getAccountByID(accountNumber as string);
    res.status(200).json(data);
  }
}

export async function getAccountByID(accountNumber: string) {
  const url = `https://api-sandbox.lafise.com/obl/v1/banks/BLNI/accounts/${accountNumber}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "G3yCDUD91N4nW6YghwTdjJoA32gauL36pq2mWZH1",
      Authorization:
        "Bearer eyJraWQiOiJSSGVcL1VWS0RSWEpleWRXZkkrZWpKY1MyVnVwWTV6MmVtWEdnRUg4dkx1RT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2dXBvZGhscG45YTQ4anVkc3JkcTExa2ZlbSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiY2F0YWxvZ3NcL2dldF9jYXRhbG9nX2RldGFpbF9ieV9jYXRhbG9nX2lkIGNhdGFsb2dzXC9nZXRfY2F0YWxvZ19ieV9jYXRhbG9nX2lkIGt5Y1wvY3VzdG9tZXJfa3ljX2NoZWNrIGNhdGFsb2dzXC9nZXRfY2F0YWxvZ3MiLCJhdXRoX3RpbWUiOjE2NzcwMjIyNTQsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0ZQb2lsRXRaSiIsImV4cCI6MTY3NzAyNTg1NCwiaWF0IjoxNjc3MDIyMjU0LCJ2ZXJzaW9uIjoyLCJqdGkiOiI4OWE2ODIwYy1iMWJhLTQ1YzUtYjA2Ny0yMGE1MmFjNWQ3MjIiLCJjbGllbnRfaWQiOiI2dXBvZGhscG45YTQ4anVkc3JkcTExa2ZlbSJ9.m1XkA7f2gvQaoCqZ-PkWrujGWIKNaqdNaEJhOvFZuzXtALwuUXChF4MjlWttn0G04OhoHZBGEWhnY2oWlw4YGAjlBTXhKvgt5lArPuJ0aLDqliBTIcQ7r7acbmyFPK_j52omkpK_smag1QlsjabKD1TsP8Jd0_Z4e56jYetS6CqYZ3L1SjxXJ7AktcErxSVFCDquL5YlstiBh72354bgWRpPSjaCPqXV_ST847JHkXonXDuhEraR1KVepdADIBHHnrsKjJqBYGBsuVJnW3h_KPR4FZHVr77JpRvIUCOCkd5fhJar-j2lg8SkLPBAcxNRvBxuq_of4kYudkCIRugpjg",
    },
  });

  return response.json();
}
